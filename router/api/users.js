var express = require("express");
var router = express.Router();

var { Users, Contact, Apply } = require("../../schema/user");
var Response = require("../../response");

/* POST Data. */
// add User
router.post("/add-users-api", function (req, res, next) {
  const user = {
    ...req.body, //copy old json
    phone: `+${req.body.inputTel}${req.body.phone}`,
  };
  var data = Users(user);
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

// add Apply
router.post("/add-apply",(req, res) => {
  const apply = req.body;
  
  var data = Apply(apply);
  data.save(function (err) {
    if (err) {
      res.redirect("/apply");
      Response.errorResponse(err, res);
    } else {
      res.redirect("/");
      // Response.successResponse("User Added!", res, {});
    }
  });
});

// add Contact
router.post("/add-contact",(req, res) => {
  const contact = req.body;
  var data = Contact(contact);
  data.save(function (err) {
    if (err) {
      res.redirect("/contactus");
      Response.errorResponse(err, res);
    } else {
      res.redirect("/");
      // Response.successResponse("User Added!", res, {});
    }
  });
});


module.exports = router;
