const mongoose = require("mongoose");

const {ObjectId} = mongoose.Schema.Types
const offerSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
  },

  date: {
    type: String,
  },

  category: {
    type: String,
    required: true,
  },

  photo: {
    type: String,
  },

  sellerId: {
     type: ObjectId, 
    ref: "seller",
    
  },
});

module.exports = mongoose.model("offer", offerSchema);
