const Carts = require("../model/cartModel");
const fs = require('fs');

//addToCartFunc 
const addToCartFunc = async (req, res) => {
  try {
    let success = false;
    const _id = req.user._id;
    const { product_id, name, color, weight, quantity, price, max_quantity, image, fileName, filePath, fileSize, fileType } = req.body;

    const imageBase64 = fs.readFileSync(filePath);
    const finalImageBase64 = imageBase64.toString("base64");
    let imgObj = {
      fileName,
      filePath, 
      fileSize,
      fileType,
      imagebase64: finalImageBase64
    }
    
    // ADDED DATA IN CARTS SCHEMA
    const cart_data = await Carts({
        user_id: _id,
        product_id,
        name,
        color,
        weight,
        quantity, 
        price,
        max_quantity,
        image: imgObj
    });

    const saved_cart_data = await cart_data.save();
    
    success = true;
    res.status(201).json({success, message:"Product added to cart successfully", saved_cart_data});
  } catch (error) {
    let success = false;
    console.log("addToCartFunc ERROR******");
    console.log(error);
    res.status(500).json({ success, message: error.message });
  }
};


// getFromUserCartFunc
const getFromUserCartFunc = async(req, res) =>{
  try {
    let success = false;
    const _id = req.user._id;
    const cart_data  = await Carts.find({user_id: _id});

    if(!cart_data){
      success = false;
      return res.status(404).json({success, message:"Not Found"});
    }

    success = true;
    res.status(200).json({success, message:"Got User Cart Data Successfully", cart_data});
  } catch (error) {
    let success = false;
    console.log("getFromCartFunc ERROR******");
    console.log(error);
    res.status(500).json({ success, message: error.message });
  }
}

//DeleteProductFromCart
const DeleteProductFromCart = async(req, res) =>{
  try {
    let success = false;
    const user_id = req.user._id;
    const cart_product_id = req.params.id;
    const cart_data  = await Carts.findOne({_id: cart_product_id});

    // IF CART DATA NOT FOUND
    if(!cart_data){
      success = false;
      return res.status(404).json({success, message:"Not Found"});
    }

    // CART DATA'S USER OR MAIN USER NOT SAME
    if(cart_data.user_id.toString() !== user_id.toString()){
      success = false;
      return res.status(401).json({success, message:"Not Allowd"});
    }

    // MAIN DELETE FUNCTION
    const deleted_cart_data = await Carts.findByIdAndDelete(cart_product_id, {new: true});

    success = true;
    res.status(200).json({success, user_id, cart_product_id, deleted_cart_data});
  } catch (error) {
    let success = false;
    console.log("DeleteProductFromCart ERROR******");
    console.log(error);
    res.status(500).json({ success, message: error.message });
  }
}

module.exports = {addToCartFunc, getFromUserCartFunc, DeleteProductFromCart};
