const fs = require('fs');
const SingleProducts = require('../model/singleProductModel');
const Products = require('../model/productsModel');




const addProductFunc = async (req, res)=>{ // 📌 TODO = Validation
    try {
        let success = false;
        const {name, company, price, colors, weight, description, category, shipping, stock, reviews, stars, featured, search_key_word }  = req.body;
        
        //📌 FILE ARRAY CREATE & PUSH ALL IMAGE FILE FOR IMAGE SCHEMA
        const file_array = [];
        let isGreaterThen1MB = false;

        req.files.forEach((element) => {
            const imageBase64 = fs.readFileSync(element.path);
            const finalImageBase64 = imageBase64.toString("base64");

            if(element.size > 1000000){ // 1000000 bytes = 1 mb
                isGreaterThen1MB = true;
            }
            const file = {
                fileName: element.originalname,
                filePath: element.path,
                fileType: element.mimetype,
                fileSize: fileSizeformatter(element.size, 2),
                imagebase64: finalImageBase64                
            }
            file_array.push(file);
        })

        //📌 if ANY IMAGE IS GREATER THEN 1 MB
        if(isGreaterThen1MB ){
            success = false;
            return res.status(400).json({success, message:"Each Image Will be less then 1 MB"});
        }

        //📌 DEFINE PRODUCTs SCHEMA AND SAVE
        const all_P_Data = await Products({
            name,
            company,
            price: JSON.parse(price),
            colors : JSON.parse(colors),
            weight,    
            description,
            category,
            featured: JSON.parse(featured),
            search_key_word,
            image : [file_array[0]]
        })
        const Saved_All_P_Data = await all_P_Data.save();

        
        //📌 DEFINE SINGLE PRODUCT SCHEMA AND SAVE
        const single_P_Data = await SingleProducts({
            product_id: Saved_All_P_Data._id,
            name,
            company,
            price : JSON.parse(price),
            colors: JSON.parse(colors),
            weight,
            description,
            category,
            shipping :JSON.parse(shipping),
            stock: JSON.parse(stock),
            reviews: JSON.parse(reviews),
            stars: JSON.parse(stars),
            image :file_array,
        })

        const saved_Single_P_Data = await single_P_Data.save();

        success = true;
        res.status(201).json({success, message:"Prodeuct Added Success fully"});
        
    } catch (error) {
        console.log("addProductFunc Error********");
        console.log(error);
    }
}

const deleteAdminProduct = async(req, res) =>{
    try {
        let success = false;
        const id = req.params.id;

        // SIMPLE PRODUCT DATA FIND
        const pro_data = await Products.findById(id);
        if(!pro_data){
            success = false;
            return res.status(404).json({success, message: "Not found"})
        }

        // FIND from SINGLE PRODUCT DATA
        const single_pro_data = await SingleProducts.findOne({product_id: id});
        if(!single_pro_data){
            success = false;
            return res.status(404).json({success, message: "Not found"})
        }

        const del_simple_data =  await Products.findByIdAndDelete(id, {new: true});
        const del_single_data =  await SingleProducts.findOneAndDelete({product_id: id}, {new: true});

        // console.log(del_simple_data);
        // console.log(del_single_data);
        success = true;
        res.status(200).json({success, message:"Deleted SuccessFully"})
    } catch (error) {
        let success = false;
        console.log("deleteAdminProduct ERROR*********");
        res.status(500).json({success, message: error.message})
    }   
}


// fileSizeformatter
const fileSizeformatter = (bytes, decimal)=>{
    if(bytes===0){
        return '0 Bytes'
    }
    const dm = decimal || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'ZB'];

    const index = Math.floor(Math.log(bytes)/ Math.log(1000));
    return parseFloat((bytes/ Math.pow(1000, index)).toFixed(dm)) +' '+sizes[index];
}

module.exports = {addProductFunc, deleteAdminProduct}