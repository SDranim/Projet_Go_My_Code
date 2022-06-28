const sellers = require("../Models/SellerSchema");
const contacts = require("../Models/ContactSellerSchema");
const bcrypt = require("bcrypt");


//delete profil seller
//API : /deleteprofilSeller/:id
exports.deleteProfilSeller = async (req, res) => {
  try {
    await sellers.findByIdAndDelete(req.user._id);
    res.status(200).send({ msg: "account deleted" });
  } catch (error) {
    res.status(400).send({ msg: "could not delete" });
  }
};

//update profil seller
//API : /updateprofilSeller/:id
exports.updateprofilSeller = async (req, res) => {
  try {
    const updated = await sellers.findByIdAndUpdate(
      req.user._id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).send({ msg: "account updated successfully", updated });
  } catch (error) {
    res.status(400).send({ msg: "could not update" });
  }
};
//update password
//API /updatePasswordSeller
exports.updatePassSeller = async (req, res) => {
  try {
    const salt = 10;
    const password = bcrypt.hashSync(req.body.password, salt);
    const updatedPass = await sellers.findByIdAndUpdate(
      req.user._id,
      { password: password },
      { new: true }
    );

    res.status(200).send({ msg: "password updated successfully", updatedPass });
  } catch (error) {
    res.status(400).send({ msg: "password not update" });
  }
};


//method Update
// API : /updatePhotoUser
exports.updatePhotoSeller=async(req,res)=>{
    
  try {
      const updated= await sellers.findByIdAndUpdate(req.user._id, {$set:{...req.body,photo:req.file.filename}} ,{new:true})
  res.status(200).send({msg:"photo updated successfully",updated})        
  } catch (error) {
      res.status(500).send({msg:"could not update photo"})        
  }
}

//get messages
//API /myMsgs
exports.myMsgs = async (req, res) => {
  try {
    const msgs = await contacts.find();
    res.status(200).send({ msg: "list of messages", msgs });
  } catch (error) {
    res.status(400).send("could not get messages");
  }
};

//delete message
//API /deletetheMsg/:id
exports.deletetheMsg = async (req, res) => {
  try {
    await contacts.findByIdAndDelete(req.params.id);
    res.status(200).send({ msg: "Message deleted" });
  } catch (error) {
    res.status(400).send("could not delete message");
  }
};
