const SingleProducts = require('../model/singleProductModel');
const Products = require('../model/productsModel');


// GET ALL PRODUCT AND FILTERING 📌
const getAllProductAndFilter = async (req, res)=>{
    try {
        const {contentSize, page, category, price, company, color, weight, search, sort} = req.query;
        let success = false;
       
        
        // FILTERING PRODUCT 📌
        const filterObj = {};

        if (category) {
            filterObj.category = category;
        }
        if(price && price==="0-500"){
            filterObj.$and = [{price:{$gte:0}}, {price:{$lte:500}}];
        }
        if(price && price ==="500-1000"){
            filterObj.$and = [{price:{$gte:500}}, {price:{$lte:1000}}];
        }
        if(price && price==="1000-9000"){
            filterObj.$and = [{price:{$gte:1000}}, {price:{$lte:9000}}];
        }
        if(price && price==="9000-above"){
            filterObj.price = {$gte:9000};
        }
        if(company){
            filterObj.company = company;
        }
        if(color){
            filterObj.colors =  { $all : [ color ] };
        }
        if(weight){
            filterObj.weight =  weight;
        } 
        if(search){
            filterObj.search_key_word = {$regex : search};
        }       
        // console.log(filterObj);

        // SORTING PRODUCT 📌
        let sortfilterObj = {createdAt: -1};

        if(sort && sort==="high-low"){
            sortfilterObj = {price: -1}
        }
        if(sort && sort==="low-high"){
            sortfilterObj = {price: +1}
        }
        if(sort && sort==="a-z"){
            sortfilterObj = {name: +1}
        }
        if(sort && sort==="z-a"){
            sortfilterObj = {name: -1}
        }

         // Finding the Product with FILTER 📌);
        let allProductData = await Products.find(filterObj).sort(sortfilterObj).limit(contentSize).skip(contentSize*(page-1));
        let totalResult = await Products.find(filterObj).count();

    
        success = true;
        res.status(200).json({success, message:"All Product Goted", totalResult, allProductData});
    } catch (error) {
        console.log("getAllProduct Error********");
        console.log(error);
    }
}

// GET PRODUCT by PRODUCT ID📌
const getProductById = async(req, res) =>{
    try {
        let success = false
        const id = req.params.id;
        const product_data = await SingleProducts.findOne({product_id:id});
        if(!product_data){
            success = false;
            return res.status(404).json({success, message:"Not Found"});
        }
        success = true;
        res.status(200).json({success, message:"Got Single Product successfully", product_data});

    } catch (error) {
        success = false
        console.log("getProductById ERROR********");
        console.log(error);
        res.status(500).json({success, error:error.message}) 
    }
}



module.exports = {getAllProductAndFilter, getProductById}