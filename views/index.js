const express = require("express");
const router = express.Router();

var { Feature } = require("../schema/user");

router.get("/", function (req, res, next) {
  Feature.find().exec((err,doc)=>{
    res.render('index',{featureprogram:doc})
      console.log(err);
    })
  
});

router.get('/:id',function (req, res, next){
  const featureprogram_id = req.params.id
    console.log(featureprogram_id)
    Feature.findOne({_id:featureprogram_id}).exec((err,doc)=>{
            res.render('featureprogram',{featureprogram:doc})
    })
     
})

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


router.get("/allprogram", function (req, res, next) {
  res.render("program");
});


module.exports = router;
