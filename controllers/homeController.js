const User = require("../models/User");
const jwt = require("jsonwebtoken");

module.exports = {
  logIn: async (req, res) => {
    try {
      let user = await User.findOne({ email: req.body.email });

      if (!user) {
        return res.status(404).json({
          status: 404,
          error: "Not Found",
          message: "User does not exist",
        });
      }

      const isPasswordCorrect = req.body.password === user.password;

      if (isPasswordCorrect) {
        const data = {
          user: {
            id: user.id,
          },
        };
        const token = jwt.sign(data, "secret_ecom");
        res.json({ success: true, token });
      } else {
        res.status(401).json({
          status: 401,
          error: "Unauthorized",
          message: "Incorrect password",
        });
      }
    } catch (err) {
      res.status(500).json({
        status: 500,
        error: "Internal Server Error",
        message: "An unexpected error occurred",
        errorDetails: err,
      });
    }
  },

  signUp: async (req, res) => {
    try {
      let userAlreadyExists = await User.findOne({ email: req.body.email });

      if (userAlreadyExists)
        res.status(409).json({
          status: 409,
          success: false,
          error: "Conflict",
          message: "User already exists",
        });

      const cart = {};

      for (let i = 0; i < 300; i++) {
        cart[i] = 0;
      }

      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        cartData: cart,
      });

      await user.save();

      const data = {
        user: {
          id: user.id,
        },
      };

      const token = jwt.sign(data, "secret_ecom");

      res.json({ success: true, token });
    } catch (err) {
      res.status(500).json({
        status: 500,
        error: "Internal Server Error",
        message: "An unexpected error occurred",
        errorDetails: err.message,
      });
    }
  },
  getHome: (req, res) => {
    try {
      res.status(200).render("home");
    } catch (err) {
      res.status(500).json({
        status: 500,
        error: "Internal Server Error",
        message: "An unexpected error occurred",
        errorDetails: err.message,
      });
    }
  },
};
