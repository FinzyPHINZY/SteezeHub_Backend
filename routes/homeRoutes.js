const express = require("express");
const homeController = require("../controllers/homeController");
const router = express.Router();

// Desc      Homepage
// Routes    http://localhost:3000/
router.get("/", homeController.getHome);

// Desc      Sign in
// Routes    http://localhost:3000/login
router.post("/login", homeController.logIn);

// Desc      Sign Up
// Routes    http://localhost:3000/signup/
router.post("/signup", homeController.signUp);

module.exports = router;
