const express = require('express');
const router = express.Router();
const path = require('path');

router.get("/index", (req, res) => {
    res.sendFile(path.join(__dirname+'/frontend/index.html'))
})

router.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname+'/frontend/signup.html'))
})

router.get("/signin", (req, res) => {
    res.sendFile(path.join(__dirname+'/frontend/signin.html'))
})


module.exports = router;