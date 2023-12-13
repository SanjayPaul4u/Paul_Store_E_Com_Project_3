const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/paul-store-e-com")
.then(()=>{
    console.log("Mongoose Connection Successfull");
}).catch((error)=>{
    console.log("Mongoose Error********");
    console.log(error);
})