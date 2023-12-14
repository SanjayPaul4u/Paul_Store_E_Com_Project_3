const Carts = require("../model/cartModel");

const addToCartFunc = async (req, res) => {
  try {
    let success = false;
    const _id = req.user._id;
    const { product_id, name, color, weight, quantity, price, max_quantity, image } = req.body;
    
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
        image
    });

    const saved_cart_data = await cart_data.save();
    
    success = true;
    res.status(201).json({success, message:"Product added to cart successfully", saved_cart_data});
  } catch (error) {
    let success = false;
    console.log("addToCartFunc ERROR******");
    res.status(500).json({ success, message: error.message });
  }
};

module.exports = {addToCartFunc};
