const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
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
    featured:{
        type : Boolean,
        require : true
    },
    image : [Object]
    
}, {timestamps : true});

const Products = new mongoose.model("product", productsSchema);

module.exports = Products;