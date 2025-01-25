const mongoose = require("mongoose");
require("dotenv").config();

const connect = async () => {
  try {
    const dbUrl = process.env.DB_URL;

    if (!dbUrl) {
      throw new Error("DB_URL is not defined in the environment variables");
    }

    await mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to the database");
  } catch (error) {
    console.error("Database connection error:", error.message);
  }
};

module.exports = connect;
