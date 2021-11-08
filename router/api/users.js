var express = require("express");
var router = express.Router();

var UsersModel = require("../../schema/user");
var Response = require("../../response");

router.get("/", function (req, res, next) {
    res.render("index");
  });

  /* POST Data. */
  router.post("/add-users-api", function (req, res, next) {
    console.log(req.body);
  
    const mybodydata = {
      user_firstname: req.body.user_firstname,
      user_email: req.body.user_email,
      user_mobile: req.body.user_mobile,
    };
    var data = UsersModel(mybodydata);
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