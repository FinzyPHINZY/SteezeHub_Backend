const Product = require("../models/Product");
const cloudinary = require("../middleware/cloudinary");
const { v4: uuidv4 } = require("uuid");
const User = require("../models/User");

module.exports = {
  getProducts: async (req, res) => {
    const products = await Product.find();

    res.json({
      success: true,
      data: products,
    });
  },

  getNewCollections: async (req, res) => {
    let products = await Product.find();

    let newCollections = products.slice(1).slice(-8);

    res.json({
      success: true,
      data: newCollections,
    });
  },

  popularInWomen: async (req, res) => {
    let products = await Product.find({ category: "women" });

    let popularInWomen = products.slice(0, 4);
    res.json({
      success: true,
      data: popularInWomen,
    });
  },

  getCart: async (req, res) => {
    try {
      console.log("Get Cart");
      let userData = await User.findOne({ _id: req.user.id });
      res.json(userData.cartData);
    } catch (error) {}
  },

  addToCart: async (req, res) => {
    try {
      let userData = await User.findOne({ _id: req.user.id });
      userData.cartData[req.body.itemId] += 1;

      await User.findOneAndUpdate(
        { _id: req.user.id },
        { cartData: userData.cartData }
      );

      res.json({ success: true });
    } catch (err) {}
  },

  removeFromCart: async (req, res) => {
    try {
      console.log("removed", req.body.itemId);
      let userData = await User.findOne({ _id: req.user.id });
      if (userData.cartData[req.body.itemId] > 0)
        userData.cartData[req.body.itemId] -= 1;

      await User.findOneAndUpdate(
        { _id: req.user.id },
        { cartData: userData.cartData }
      );

      res.json({ success: true, message: "Removed" });
    } catch (err) {}
  },

  addProduct: async (req, res) => {
    // const result = await cloudinary.uploader.upload(req.file.path);

    try {
      let products = await Product.find({});
      let id;
      if (products.length > 0) {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];

        id = last_product.id + 1;
      } else {
        id = 1;
      }
      const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
      });

      await product.save();
      console.log(`${req.body.name} saved to Database Sucessfully`);

      res.json({
        success: true,
        name: req.body.name,
      });
    } catch (err) {
      console.error(`FAILED: Adding product to database failed ${err}`);
    }
  },

  removeProduct: async (req, res) => {
    await Product.findOneAndDelete({ id: req.body.id });

    console.log("Product removed successfully from database");

    res.json({
      success: true,
      name: req.body.name,
    });
  },
};
