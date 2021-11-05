const express = require('express');
const router = express.Router();
const path = require('path');

router.get("/", (req, res) => {
    res.redirect("/index");
});
router.get("/aboutus.html", (req, res) => {
    res.redirect("/aboutus");
});

router.get("/index", (req, res) => {
    res.sendFile(path.join(__dirname+'/frontend/index.html'))
})

router.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname+'/frontend/signup.html'))
})

router.get("/signin", (req, res) => {
    res.sendFile(path.join(__dirname+'/frontend/signin.html'))
})

router.get("/aboutus", (req, res) => {
    res.sendFile(path.join(__dirname+'/frontend/aboutus.html'))
})


module.exports = router;