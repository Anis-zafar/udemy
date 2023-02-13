const express = require("express");
const router = express.Router();
const getuser = require("../controller/controller");

router.get("/getuser/:id/:name", getuser);

module.exports = router;
