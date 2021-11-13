const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.render("index");
});

router.get("/signin", function (req, res, next) {
  res.render("signin");
});

router.get("/signup", function (req, res, next) {
  res.render("signup");
});

router.get("/aboutus", function (req, res, next) {
  res.render("aboutus");
});
router.get("/contactus", function (req, res, next) {
  res.render("contactus");
});
router.get("/apply", function (req, res, next) {
  res.render("apply");
});
router.get("/howtowork", function (req, res, next) {
  res.render("howtowork");
});
router.get("/featuredestination", function (req, res, next) {
  res.render("featuredestination");
});



module.exports = router;
