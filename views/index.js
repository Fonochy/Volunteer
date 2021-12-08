const express = require("express");
const router = express.Router();

var { Feature, Destination, Program, Users } = require("../schema/user");

router.get("/", async (req, res, next) => {
  var validation = req.session.user;
  console.log(validation);
  Feature.find()
    .limit(4)
    .exec((err_program, program) => {
      Destination.find()
        .limit(4)
        .exec((err_destination, destination) => {
          res.render("index", {
            featureprogram: program,
            featuredestination: destination,
            user: validation,
          });
        });
    });
});

router.get("/allprogram", async (req, res, next) => {
  var validation = req.session.user;
  Program.find()
    .limit(10)
    .exec((err_programs, programs) => {
      res.render("program", {
        program: programs,
      });
      console.log(err_programs);
    });
});

router.get("/featureprogram/:id", function (req, res, next) {
  var validation = req.session.user;
  const featureprogram_id = req.params.id;
  console.log(featureprogram_id);
  Feature.findOne({ _id: featureprogram_id }).exec((err, doc) => {
    console.log(doc);
    res.render("featureprogram", { featureprogram: doc });
  });
});

router.get("/featuredestination/:id", function (req, res, next) {
  var validation = req.session.user;
  const featuredestination_id = req.params.id;
  console.log(featuredestination_id);
  Destination.findOne({ _id: featuredestination_id }).exec((err, doc) => {
    console.log(doc);
    res.render("featuredestination", { featuredestination: doc });
  });
});

router.get("/mainprogram/:id", function (req, res, next) {
  var validation = req.session.user;
  const program_id = req.params.id;
  console.log(program_id);
  Program.findOne({ _id: program_id }).exec((err, doc) => {
    console.log(doc);
    res.render("mainprogram", { program: doc });
  });
});

router.get("/review/:id", function (req, res, next) {
  var validation = req.session.user;
  Review.find()
    .limit(10)
    .exec((err_reviews, reviews) => {
      res.render("review", {
        review: reviews,
      });
      console.log(err_reviews);
    });
});

router.get("/signin", function (req, res, next) {
  var validation = req.session.user;
  res.render("signin");
});

router.get("/signup", function (req, res, next) {
  var validation = req.session.user;
  res.render("signup");
});

router.get("/aboutus", function (req, res, next) {
  var validation = req.session.user;
  res.render("aboutus");
});

router.get("/contactus", function (req, res, next) {
  var validation = req.session.user;
  res.render("contactus");
});

router.get("/apply", function (req, res, next) {
  var validation = req.session.user;
  res.render("apply");
});

router.get("/howtowork", function (req, res, next) {
  var validation = req.session.user;
  res.render("howtowork");
});

router.get("/allprogram", function (req, res, next) {
  var validation = req.session.user;
  res.render("program");
});
router.get("/review", function (req, res, next) {
  var validation = req.session.user;
  res.render("review");
});

router.get("/signout", function (req, res, next) {
  var validation = req.session.user;
  req.session.destroy(function (err) {
    res.redirect("/");
  });
});

module.exports = router;
