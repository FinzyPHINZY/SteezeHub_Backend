const Product = require("../models/Product");
const cloudinary = require("../middleware/cloudinary");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  getProducts: async (req, res) => {
    const products = await Product.find();

    console.log(products);

    res.json({
      success: true,
      data: products,
    });
  },

  addProduct: async (req, res) => {
    // const result = await cloudinary.uploader.upload(req.file.path);

    console.log(req.body);
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
