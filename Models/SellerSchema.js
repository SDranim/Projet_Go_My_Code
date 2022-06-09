const mongoose = require("mongoose");

const sellerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  phone_number: {
    type: String,
    required: true,
  },
  
  adress: String,
  discription: String,
  photo: String,
});

module.exports = mongoose.model("seller", sellerSchema);
