const express = require("express");
const {router} = require("./routes/authRouter");// auth router
const ProductRouter = require("./routes/productRouter");
const OtherRouter = require("./routes/otherRouter");

// MIDLEWARE
const app = express();

// DEFINE
const port = process.env.PORT || 7000;
const host = "127.0.0.1";

// EXPRESS ROUTER CREATE
app.use("/api/auth", router);
app.use("/api/product", ProductRouter );
app.use("/api", OtherRouter );

// LISTENING SERVER
app.listen(port, host, ()=>{
    console.log(`http://${host}:${port}`);
})