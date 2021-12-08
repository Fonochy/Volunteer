var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var mongoose = require("mongoose");
var session = require("express-session");
var flash = require("req-flash");
var cors = require("cors");

var indexRouter = require("./views/index");
var usersRouter = require("./router/routes");

var app = express();
app.use(cors());

// create session object
app.use(
  session({
    secret: "secretVolunteer",
    resave: true,
    saveUninitialized: true,
  })
);

// view engine setup
https: app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
//old body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// secret key กำหนดเองได้
app.use(
  session({
    secret: "djhxcvxfgshajfgjhgsjhfgsakjeauytsdfy",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(flash());

// Global variables
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});

app.use("/", indexRouter);
app.use("/api", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);

  console.log("Fatal Error: \n" + err.message);
  res.render("error");
});
// environment mode มีทั้ง development ที่แสดง error และ production ไม่แสดง error

module.exports = app;
