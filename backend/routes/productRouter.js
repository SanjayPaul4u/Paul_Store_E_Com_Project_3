const express = require("express");

// ROUTER CREATE
const router = express.Router();

// ROUTING

router.get("/", (req, res)=>{
    res.send("This is Product Router");
})

// EXPORT
module.exports = router;