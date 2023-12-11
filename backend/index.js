const express = require("express");

// MIDLEWARE
const app = express();

// DEFINE
const port = process.env.PORT || 7000;
const host = "127.0.0.1";

// EXPRESS ROUTER CREATE
app.get("/", (req, res)=>{
    res.send("This is Home Page");
})

// LISTENING SERVER
app.listen(port, host, ()=>{
    console.log(`http://${host}:${port}`);
})