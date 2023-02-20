const data = require("../contoller/data")
const express = require("express")
const router = express.Router()

router.route("/data").get(data.getAllProduct)
router.route("/country").get(data.topic);

module.exports = router