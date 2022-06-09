const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB is connected");
  } catch (error) {
    console.log({ "could not connect :": error });
  }
};

module.exports = connectDB;
