const express = require("express");
const {router} = require("./routes/authRouter");// auth router
const ProductRouter = require("./routes/productRouter");
const CartRouter = require("./routes/cartRouter");
const OtherRouter = require("./routes/otherRouter");
require("./db/database");
const cors = require("cors");


const app = express();


// DEFINE
const port = process.env.PORT || 7000;
const host = "127.0.0.1";

// midleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// EXPRESS ROUTER CREATE
app.use("/api/auth", router);
app.use("/api/products", ProductRouter );
app.use("/api/cart", CartRouter );
app.use("/api", OtherRouter );


// LISTENING SERVER
app.listen(port, host, ()=>{
    console.log(`http://${host}:${port}`);
})