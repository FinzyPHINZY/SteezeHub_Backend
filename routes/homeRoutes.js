const express = require("express");
const homeController = require("../controllers/homeController");
const router = express.Router();

// Desc      Homepage
// Routes    http://localhost:3000/
router.get("/", homeController.getHome);
module.exports = router;
