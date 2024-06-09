const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const fetchUser = require("../middleware/user");

// Desc      Fetch all Products
// Routes    http://localhost:3000/product/
router.get("/", productController.getProducts);

// Desc      Fetch new Products
// Routes    http://localhost:3000/product/newCollections
router.get("/newcollections", productController.getNewCollections);

// Desc      Fetch Products that are popular with women
// Routes    http://localhost:3000/product/popularWomen
router.get("/popularwomen", productController.popularInWomen);

// Desc      Get Cart Data from Database
// Routes    http://localhost:3000/product/removefromcart
router.post("/getcart", fetchUser, productController.getCart);

// Desc      Remove Product to cart
// Routes    http://localhost:3000/product/removefromcart
router.post("/removefromcart", fetchUser, productController.removeFromCart);

// Desc      Add Product to cart
// Routes    http://localhost:3000/product/addtocart
router.post("/addtocart", fetchUser, productController.addToCart);

// Desc      Add Product
// Routes    http://localhost:3000/product/addProduct
router.post("/addProduct", productController.addProduct);

// Desc      Remove Product
// Routes    http://localhost:3000/product/removeProduct
router.post("/removeProduct", productController.removeProduct);

module.exports = router;
