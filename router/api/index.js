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

module.exports = router;
