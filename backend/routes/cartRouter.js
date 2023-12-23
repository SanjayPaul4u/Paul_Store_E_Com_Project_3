const express = require("express");
const { addToCartFunc, getFromUserCartFunc, DeleteProductFromCart } = require("../controller/cartController");
const fetchUser = require("../middleware/fetchUser");



const router = express.Router();

// ROUTE 1: ADD TO CART: /api/cart/addtocart
router.post("/addtocart/:token", fetchUser, addToCartFunc);

// ROUTE 2: Get From Cart: /api/cart/getfromcart
router.get("/getfromcart/:token", fetchUser, getFromUserCartFunc);

// ROUTE 3: Delete From Cart: /api/cart/getfromcart
router.delete("/deletefromcart/:id/:token", fetchUser, DeleteProductFromCart);

module.exports = router;