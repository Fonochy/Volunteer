var express = require("express");
var router = express.Router();

var Users = require("../../schema/user");
var Response = require("../../response");


/* POST Data. */
router.post("/add-users-api", function (req, res, next) {
  console.log(req.body);
  

  const mybodydata = {
    user_firstname: req.body.user_firstname,
    user_lastname: req.body.user_lastname,
    user_email: req.body.user_email,
    user_confirmemail: req.body.user_confirmemail,
    user_password: req.body.user_password,
    user_confirmpassword: req.body.user_confirmpassword,
    user_country: req.body.user_country,

  };
  var data = Users(mybodydata);
  //var data = UsersModel(req.body);
  data.save(function (err) {
    if (err) {
      Response.errorResponse(err, res);
    } else {
      Response.successResponse("User Added!", res, {});
    }
  });
});

module.exports = router;
