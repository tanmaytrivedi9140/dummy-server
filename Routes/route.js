const express = require("express");
const router = express.Router();
const {dummy}= require("../Controller/dummycon")
router.route("/dummy").get(dummy);
module.exports = router;
