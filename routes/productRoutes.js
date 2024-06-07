const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Desc      Fetch all Products
// Routes    http://localhost:3000/product/
router.get("/", productController.getProducts);

// Desc      Add Product
// Routes    http://localhost:3000/product/addProduct
router.post("/addProduct", productController.addProduct);

// Desc      Remove Product
// Routes    http://localhost:3000/product/removeProduct
router.post("/removeProduct", productController.removeProduct);

module.exports = router;
