const mongoose = require("mongoose");

const singleProductSchema = new mongoose.Schema({
    product_id: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "product_id"
    },
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
    weight: {
        type : String
    },
    description: {
        type : String,
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

const SingleProducts = new mongoose.model("sigleproduct", singleProductSchema);

module.exports = SingleProducts;