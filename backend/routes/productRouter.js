const express = require("express");
const { addProductFunc } = require("../controller/productsController");
const upload = require("../photoUploadHelper/fileHelper");


// ROUTER CREATE
const router = express.Router();

// ROUTING
// 📌 route 1: post: /api/products/addproduct
router.post("/addproduct", upload.array("files"), addProductFunc);

// EXPORT
module.exports = router;