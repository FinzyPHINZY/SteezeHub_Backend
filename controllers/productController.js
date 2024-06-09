const Product = require("../models/Product");
const cloudinary = require("../middleware/cloudinary");
const { v4: uuidv4 } = require("uuid");

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

  addProduct: async (req, res) => {
    // const result = await cloudinary.uploader.upload(req.file.path);

    try {
      const product = new Product({
        id: uuidv4(),
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
