const mongoose = require("mongoose");

const singleProductSchema = new mongoose.Schema({
    name: {
        type : String,
        require : true
    },
    company:{
        type : String,
        require : true
    },
    price : {
        type : Number,
        require : true
    },
    colors : [Object],
    weight: [Object],
    description: {
        type : Number,
        require : true
    },
    category:{
        type : String,
        require : true
    },
    shipping :{
        type: Boolean,
        require: true
    },
    stock:{
        type: Number,
        require: true 
    },
    reviews:{
        type: Number,
        require: true 
    },
    stars:{
        type: Number,
        require: true 
    },
    image : [Object],
    
}, {timestamps : true});

const singleProduct = new mongoose.model("sigleproduct", singleProductSchema);

module.exports = singleProduct;