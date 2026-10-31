const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/authController");

// Base path: /api/auth => create account
router.post("/register", register);
router.post("/login", login);

module.exports = router;
