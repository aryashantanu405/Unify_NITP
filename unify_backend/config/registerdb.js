const mongoose = require("mongoose");
<<<<<<< HEAD
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
=======

function connecttodb() {
  mongoose.connect(process.env.DB_URL).then(() => {
    console.log("connected to db");
  });
}


module.exports=connecttodb;
>>>>>>> e5a66828dbf426378df4156e38b60dd11b92817b
