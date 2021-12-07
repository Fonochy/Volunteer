const express = require("express");
const router = express.Router();

var { Feature, Destination } = require("../schema/user");

router.get("/", async (req, res, next) => {
  Feature.find()
    .limit(3)
    .exec((err_program, program) => {
      Destination.find()
        .limit(3)
        .exec((err_destination, destination) => {
          res.render("index", {
            featureprogram: program,
            featuredestination: destination,
          });
          console.log(err_program, err_destination);
        });
    });
});

router.get("/featureprogram/:id", function (req, res, next) {
  const featureprogram_id = req.params.id;
  console.log(featureprogram_id);
  Feature.findOne({ _id: featureprogram_id }).exec((err, doc) => {
    console.log(doc);
    res.render("featureprogram", { featureprogram: doc });
  });
});

router.get("/featuredestination/:id", function (req, res, next) {
  const featuredestination_id = req.params.id;
  console.log(featuredestination_id);
  Destination.findOne({ _id: featuredestination_id }).exec((err, doc) => {
    console.log(doc);
    res.render("featuredestination", { featuredestination: doc });
  });
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
router.get("/mainprogram", function (req, res, next) {
  res.render("mainprogram");
});

router.get("/allprogram", function (req, res, next) {
  res.render("program");
});

module.exports = router;
