const jwt = require("jsonwebtoken");
const Users =require("../model/userModel");
require('dotenv').config()

// define
const jwt_secret_key = process.env.JWT_SECRET_KEY;

// main fetch user function 
const fetchUser = async(req, res, next) =>{
    let success = false;
    const token  = req.params.token;

    if(!token){
        success = false;
        return res.status(401).json({success, message: "Please authenticate avalid token"})
    }

    try {
        const verified_token = await jwt.verify(token, jwt_secret_key);
        const user_data = await Users.findOne({_id: verified_token.user.id});
        console.log(user_data);

        req.user = user_data;
        req.token = token;
        next();        
    } catch (error) {
        success = false;
        return res.status(401).json({success, message: "Please authenticate a valid token(verification time)"})
    }
}

module.exports = fetchUser;