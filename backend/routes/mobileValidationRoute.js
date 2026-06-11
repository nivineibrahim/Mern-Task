const express = require("express");
const { validateMobile } = require("../controllers/validateMobile");

const router = express.Router();

router.post("/validateMobile", validateMobile);

module.exports = router;