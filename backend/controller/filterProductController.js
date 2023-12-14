const SingleProducts = require('../model/singleProductModel');
const Products = require('../model/productsModel');


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
        let allProductData = await Products.find(filterObj).sort(sortfilterObj).select("-image").limit(contentSize).skip(contentSize*(page-1));

        const totalResult = await Products.countDocuments({});
        

        success = true;
        res.status(200).json({success, message:"All Product Goted", totalResult, allProductData});
    } catch (error) {
        console.log("getAllProduct Error********");
        console.log(error);
    }
}


// ?category=
// cake, ice+creame, bakery, others, all

// &company= 
// dinamicly find

// &price=
// 0-500
// 500-1000
// 1000-9000
// 9000-above

// &colors=
//{ colors : { $all : [' rgb(30 30 200)'] }}

// &weight=
// 500g, 1kg, 5kg, 15kg, 25kg



module.exports = {getAllProductAndFilter}