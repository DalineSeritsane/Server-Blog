const express = require("express");
const { signup } = require("../authorController")

const router = express.Router();
router.post("/signup", signup);

module.exports = router;