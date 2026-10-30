const express = require("express");
const router = express.Router();
const { register } = require("../controllers/authController");

// Base path: /api/auth/register => create account
router.post("/register", register);

module.exports = router;
