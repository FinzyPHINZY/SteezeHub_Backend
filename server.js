require("dotenv").config({ path: "./config/.env" });
const express = require("express");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/database");
const homeRoutes = require("./routes/homeRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const productRoutes = require("./routes/productRoutes");
const PORT = process.env.PORT;

const app = express();

// Connect to Database
connectDB();

app.set("view engine", "ejs");
// Middlewares
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("common"));

app.use("/", homeRoutes);
app.use("/upload", uploadRoutes);
app.use("/product", productRoutes);

app.listen(PORT, (err) => {
  if (err) console.log("Server Error: ", err);
  console.log(
    `Server is running on http://localhost:${PORT} ...betta go catch it`
  );
});
