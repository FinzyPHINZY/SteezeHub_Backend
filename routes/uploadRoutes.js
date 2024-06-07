const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
require("dotenv").config({ path: "../config/.env" });
const PORT = process.env.PORT;

router.post("/", upload.single("product"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: 0, message: "No file uploaded" });
  }

  const PORT = process.env.PORT || 3000;
  res.json({
    success: 1,
    image_url: `http://localhost:${PORT}/uploads/images/${req.file.filename}`,
  });
});

module.exports = router;
