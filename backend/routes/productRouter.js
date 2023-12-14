const express = require("express");
const { addProductFunc, deleteAdminProduct } = require("../controller/productsController");
const { getAllProductAndFilter, getProductById} = require("../controller/filterProductController");
const upload = require("../photoUploadHelper/fileHelper");


// ROUTER CREATE
const router = express.Router();

// ROUTING
// 📌 route 1: post: /api/products/addproduct (FOR ADMIN REQUIRE)
router.post("/addproduct", upload.array("files"), addProductFunc);

// 📌 route 2: post: /api/products/deleteproduct/:id (FOR ADMIN REQUIRE)
router.delete("/deleteproduct/:id", deleteAdminProduct);

// 📌 route 3: get: /api/products/allproduct
router.get("/allproduct", getAllProductAndFilter);

// 📌 route 4: get: /api/products/allproduct/:id
router.get("/allproduct/:id", getProductById);

// EXPORT
module.exports = router;