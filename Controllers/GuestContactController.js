const contacts = require("../Models/GuestContactSchema");

// method POST
// API : /guestContact
exports.Contact= async (req,res)=>{
    try {
        const newMsg = new contacts(req.body);
        await newMsg.save();
        res.status(200).send({msg:"Message sent successfully",newMsg})
    } catch (error) {
        res.status(400).send('could not send the message')
    }
}