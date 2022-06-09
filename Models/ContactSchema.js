const mongoose = require ('mongoose');

const contactSchema = new mongoose.Schema({
    first_name: {
        type:String,
        required : true,},
        
    Last_name:{
        type:String,
        required : true,
    },

    email : {
        type: String,
        required : true,
    },

    phone_number:{
        type: String,
        required : true, 
    },

    massage:{
        type: String,
        required : true, 
    },
   
})

module.exports = mongoose.model("contact",contactSchema) ;