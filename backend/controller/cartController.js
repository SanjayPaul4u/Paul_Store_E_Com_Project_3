const Carts = require("../model/cartModel");
const fs = require('fs');

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

module.exports = {addToCartFunc};
