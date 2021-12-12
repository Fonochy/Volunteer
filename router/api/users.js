var express = require("express");
const bcrypt = require("bcryptjs");
var router = express.Router();

var { Users, Contact, Apply } = require("../../schema/user");
var Response = require("../../response");

//อัพโหลดไฟล์
const multer = require('multer')

const storage = multer.diskStorage({
    destination:function(req,file,cb){
      cb(null, `${__dirname}/../../public/transferproof`); // ตำแหน่งจัดเก็บไฟล์
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+".jpg")//เปลี่ยนชื่อไฟล์ ป้องกันชื่อซ้ำกัน
    }
});
//เริ่มต้น upload
const upload = multer({
  storage:storage
});

/* POST Data. */
// add User
router.post("/add-users-api", function (req, res, next) {
  const user = {
    ...req.body, //copy old json
    phone: `+${req.body.inputTel}${req.body.phone}`,
    user_password: bcrypt.hashSync(req.body.user_password, 8),
  };
  var data = Users(user);
  //var data = UsersModel(req.body);
  data.save(function (err) {
    if (err) {
      res.redirect("/signup");
      Response.errorResponse(err, res);
    } else {
      req.session.loggedin = true;
      req.session.user = user;
      res.redirect("/");
      // Response.successResponse("User Added!", res, {});
    }
  });
});

// add Apply
router.post("/add-apply",upload.single("apply_transferpay") ,(req, res) => {
  const apply = {
    ...req.body,
    apply_transferpay: req.file.filename,
  };
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
router.post("/add-contact", (req, res) => {
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

// Sign in
router.post("/signin", (req, res) => {
  var email = req.body.email;
  var password = req.body.password;

  if (email && password) {
    // console.log(email);
    Users.findOne({ user_email: email }).exec((err, results) => {
      if (results) {
        if (bcrypt.compareSync(password, results.user_password)) {
          req.session.loggedin = true;
          req.session.user = results;
          // response.redirect("/home");
          res.redirect("/");
        } else {
          res.redirect("/signin");
        }
      } else {
        res.redirect("/signin");
      }
    });
  } else {
    res.redirect("/signin");
  }
});



module.exports = router;
