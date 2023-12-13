const mongoose = require("mongoose");
require('dotenv').config()

mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.MAIN_DATA_BASE}`)
.then(()=>{
    console.log("Mongoose Connection Successfull");
}).catch((error)=>{
    console.log("Mongoose Error********");
    console.log(error);
})