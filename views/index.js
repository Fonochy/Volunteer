const express = require("express");
const router = express.Router();

var { Feature, Destination, Program, Users, Review } = require("../schema/user");

router.get("/", async (req, res, next) => {
  var validation = req.session.user;
  console.log(validation);
  Feature.find()
    .limit(4)
    .exec((err_program, program) => {
      Destination.find()
        .limit(4)
        .exec((err_destination, destination) => {
          Review.find()
            .limit(4)
            .exec((err_review, review) => {
              res.render("index", {
              featureprogram: program,
              featuredestination: destination,
              review : review,
              user : validation,
              });
              console.log(err_program, err_destination, err_review);
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
        user : validation,
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
    res.render("featureprogram", { user : validation, featureprogram: doc });
  });
});

router.get("/featuredestination/:id", function (req, res, next) {
  var validation = req.session.user;
  const featuredestination_id = req.params.id;
  console.log(featuredestination_id);
  Destination.findOne({ _id: featuredestination_id }).exec((err, doc) => {
    console.log(doc);
    res.render("featuredestination", { user : validation, featuredestination: doc });
  });
});

router.get("/mainprogram/:id", function (req, res, next) {
  var validation = req.session.user;
  const program_id = req.params.id;
  console.log(program_id);
  Program.findOne({ _id: program_id }).exec((err, doc) => {
    console.log(doc);
    res.render("mainprogram", { user : validation, program: doc });
  });
});

router.get("/review/:id", function (req, res, next) {
  var validation = req.session.user;
  const review_id = req.params.id;
  console.log(review_id);
  Review.findOne({ _id: review_id }).exec((err, doc) => {
    console.log(doc);
    res.render("review", { user : validation, review: doc });
  });
});
  


router.get("/signin", function (req, res, next) {
  var validation = req.session.user;
  res.render("signin", {
    user : validation,
  });
});

router.get("/signup", function (req, res, next) {
  var validation = req.session.user;
  res.render("signup", {
    user : validation,
  });
});

router.get("/aboutus", function (req, res, next) {
  var validation = req.session.user;
  res.render("aboutus",{
    user : validation,
  });  
});

router.get("/contactus", function (req, res, next) {
  var validation = req.session.user;
  res.render("contactus",{
    user : validation,
  });  
});

router.get("/apply", function (req, res, next) {
  var validation = req.session.user;
  Program.find().exec((err_programs, programs) => {
  res.render("apply",{
    user : validation,
    program: programs,
  }); 
    console.log(err_programs);
  });
});

router.get("/howtowork", function (req, res, next) {
  var validation = req.session.user;
  res.render("howtowork",{
    user : validation,
  }); 
});



router.get("/signout", function (req, res, next) {
  var validation = req.session.user;
  req.session.destroy(function (err) {
    res.redirect("/");
  });
});

module.exports = router;
