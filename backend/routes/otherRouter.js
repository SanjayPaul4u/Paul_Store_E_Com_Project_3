const express = require("express");

// ROUTER CREATE
const router = express.Router();

// ROUTING

router.get("/", (req, res)=>{
    res.send("This is Other Router");
})

// EXPORT
module.exports = router