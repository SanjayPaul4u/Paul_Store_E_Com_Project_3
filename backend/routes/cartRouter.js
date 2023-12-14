const express = require("express");
const { addToCartFunc } = require("../controller/cartController");
const fetchUser = require("../middleware/fetchUser");



const router = express.Router();

// ROUTE 1: ADD TO CART: /api/cart/addtocart
router.post("/addtocart/:token", fetchUser, addToCartFunc);

module.exports = router;