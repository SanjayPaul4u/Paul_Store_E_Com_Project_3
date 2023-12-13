const Users = require("../model/userModel");
const { body, validationResult } = require('express-validator');
const bcrypt = require("bcryptjs")

const createAccoutntFunc = async (req, res)=>{
    try {
        let success = false
        // check validation by express-validator📌

        const result = validationResult(req);
        if (!result.isEmpty()) {
            success = false
            return res.json({success, message: `Invalid Credentials - ${result.array()[0].msg}`, errors: result.array() });
        }

        // check email already exists or not📌
        const isEmail = await Users.findOne({email:req.body.email});
        if(isEmail){
            success = false
             return res.status(400).json({success, message:"A user with this Email already exists"});
        }
        // if both password are not match 📌
        if(req.body.password!== req.body.confirmPassword){
            success = false
            return res.status(400).json({success, message:"Your both passwords are not same"});
        }

        // final code for save data in db 📌
        const user_data = await Users({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword
        })

        // pre method before save for hashing password***📌

        // generate toke by userSchema.methods.createToken 📌
        const token = await user_data.createToken();
        
        // if there is not toke 📌
        if(!token){
            success = false
            return res.status(400).json({success, message:"Token not generated"});
        }

        const saved_data = await user_data.save();
        success = true;
        res.status(201).json({token, success, message:"Account Created SuccessFully", saved_data});
    } catch (error) {
        success = false
        console.log("SIGNUP ERROR********");
        console.log(error);
        res.status(500).json({success, error:error.message})
    }

}
// LOGIN FUNCTION 
const loginFunc = async(req, res, next) =>{
    try {
        let success = false
        const email = req.body.email;
        const password = req.body.password;
        const user_data = await Users.findOne({email});

        // email check📌
        if(!user_data){
            success = false
            return res.status(400).json({success, message:"Invalid Creadentialse"})
        }
        // password check📌
        const isPassword = await bcrypt.compare(password, user_data.password);
        if(!isPassword){
            success = false
            return res.status(400).json({success, message:"Invalid Creadentialsp"})
        }

        // final login code📌
        const token = await user_data.createToken();
        // if there is not toke 📌
        if(!token){
            success = false
            return res.status(400).json({success, message:"Token not generated"});
        }
        success = true
        res.status(201).json({token, success, message:"LoggedIn successfully", user_data})

    } catch (error) {
        success = false
        console.log("LOGIN ERROR********");
        console.log(error);
        res.status(500).json({success, error:error.message})
    }
}


// GETUSER FUNCTION
const getUserFunc = async(req, res) =>{
    try {
        let success = false
        const _id = req.user._id;
        const user_data = await Users.findOne({_id});
        if(!user_data){
            success = false;
            return res.status(404).json({success, message:"Not Found"});
        }
        success = true;
        res.status(200).json({success, message:"Got User successfully", user_data});

    } catch (error) {
        success = false
        console.log("GET USER ERROR********");
        console.log(error);
        res.status(500).json({success, error:error.message}) 
    }
}


module.exports = {createAccoutntFunc, loginFunc, getUserFunc};