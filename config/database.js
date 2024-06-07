const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DATABASE_URI);

    console.log(
      `SUCCESS: Connected to database successfully. Connection: ${conn.connection.host}`
    );
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log();
};

module.exports = connectDB;
