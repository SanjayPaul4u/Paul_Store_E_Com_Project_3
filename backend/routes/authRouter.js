const express = require("express");
const { body, validationResult } = require('express-validator');
const { createAccoutntFunc, loginFunc, getUserFunc } = require("../controller/authController");
const fetchUser = require("../middleware/fetchUser");



// ROUTER CREATE
const router = express.Router();

// ROUTING
// 📌 route 1 : CreateAcount - /api/auth/createaccount
router.post("/createaccount", [
    body("name", "Minimum Length of name should be 3*****").isLength({min:3}),
    body("name", "max length of name should be 25*").isLength({max:25}),
    body("email", "Enter Valid Email *").isEmail(),
    body("password", "min length of password should be 3*").isLength({min:3}),
    body("password", "max length of password should be 20*").isLength({max:20}),
    body("confirmPassword", "min length of password should be 3*").isLength({min:3}),
    body("confirmPassword", "max length of password should be 20*").isLength({max: 20}),
], createAccoutntFunc);// NO AUTHENTICATION REQUIRED


// 📌 route 2: Login - /api/auth/login
router.post("/login", loginFunc);// NO AUTHENTICATION REQUIRED

// 📌 route 3: getuser - /api/auth/getuser
router.get("/getuser/:token", fetchUser, getUserFunc);

// EXPORT
module.exports = {router}