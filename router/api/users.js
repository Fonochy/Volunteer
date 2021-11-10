var express = require("express");
var router = express.Router();

var Users = require("../../schema/user");
var Response = require("../../response");

/* POST Data. */
router.post("/add-users-api", function (req, res, next) {
  var data = Users(req.body);
  //var data = UsersModel(req.body);
  data.save(function (err) {
    if (err) {
      res.redirect("/signup");
      Response.errorResponse(err, res);
    } else {
      res.redirect("/");
      // Response.successResponse("User Added!", res, {});
    }
  });
});

module.exports = router;
