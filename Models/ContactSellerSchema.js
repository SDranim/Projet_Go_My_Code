const mongoose = require("mongoose");

const contactSellerSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },

  last_name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  phone_number: {
    type: String,
    required: true,
  },

  message: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("contactSeller", contactSellerSchema);
