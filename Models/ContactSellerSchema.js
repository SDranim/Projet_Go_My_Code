const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types
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


  sellerId: {
    type: ObjectId, 
   ref: "seller",
   
 },
 
 userId: {
  type: ObjectId, 
 ref: "user",
 
},

});

module.exports = mongoose.model("contactSeller", contactSellerSchema);
