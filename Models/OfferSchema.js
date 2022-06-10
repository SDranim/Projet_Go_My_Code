const mongoose = require("mongoose");

const offerSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  date: {
    type: String,
    required: true,
  },

  photo: {
    type: String,
  },

  sellerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "seller",
  },
});

module.exports = mongoose.model("offer", offerSchema);
