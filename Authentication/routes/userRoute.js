const express = require("express");
const { userData } = require("../controllers/userController");
const router = express.Router();

router.get("/", userData);

module.exports = router;
