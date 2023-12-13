const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require('dotenv').config();
const jwt_secret_key = process.env.JWT_SECRET_KEY;


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email:{
        type: String, 
        require: true,
        unique: true         
    },
    password:{
        type: String,
        require: true
    },
    confirmPassword: {
        type: String,
        require: true
    },
}, {timestamps : true});

// token generate📌
userSchema.methods.createToken = async function (){
    try {
        const data = {
            user:{
                id:this._id
            }
        }
        const gen_token = await jwt.sign(data, jwt_secret_key);

        await this.save();
        return gen_token;
    } catch (error) {
        console.log("Create Token Error**********");
        console.log(error);
    }
}

// Created secure password by :"pre method"📌
userSchema.pre("save", async function(next){
    if(this.isModified("password")){
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        this.confirmPassword =undefined;
        
    }
    next();
})

const Users = new mongoose.model("user", userSchema);

module.exports = Users;