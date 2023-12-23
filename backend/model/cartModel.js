const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    user_id :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "user_id"
    },
    product_id :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "product_id"
    },
    name :{
        type: String,
        require: true
    },
    color:{
        type: String
    },
    weight :{
        type: String
    },
    quantity: {
        type :Number,
        require : true
    },
    price: {
        type :Number,
        require : true
    },
    max_quantity: {
        type :Number,
        require : true
    },
    image: Object  
}, {timestamps: true});

const Carts = new mongoose.model("cart", cartSchema);

module.exports = Carts;