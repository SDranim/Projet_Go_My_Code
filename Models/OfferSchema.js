const mongoose = require("mongoose");

const offerSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  catégorie: {
    type: String,
    required: true,
  },

  discription: {
    type: String,
    required: true,
  },

  date: {
    type: String,
    required: true,
  },

  photo: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("offer", offerSchema);
