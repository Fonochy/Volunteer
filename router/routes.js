const express = require("express");
const router = express.Router();

const userAPI = require("./api/users.js");

router.use("/user", userAPI);

module.exports = router;
