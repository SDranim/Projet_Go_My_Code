const sellers = require("../Models/SellerSchema");
const contacts = require("../Models/ContactSellerSchema");
const offers = require("../Models/OfferSchema");
const bcrypt = require("bcrypt");

//delete profil seller
//API : /deleteprofilSeller/:id
exports.deleteProfilSeller = async (req, res) => {
  try {
    await sellers.findByIdAndDelete(req.user._id);
    await offers.deleteMany({sellerId: req.user._id});
    res.status(200).send({msg: "Account deleted"});
  } catch (error) {
    res.status(500).send({msg: "Could not delete"});
  }
};

//update profil seller
//API : /updateprofilSeller/:id
exports.updateprofilSeller = async (req, res) => {
  try {
    const updated = await sellers.findByIdAndUpdate(req.user._id, {$set: req.body}, {new: true});

    res.status(200).send({msg: "Account updated successfully", updated});
  } catch (error) {
    res.status(500).send({msg: "Could not update"});
  }
};
//update password
//API /updatePasswordSeller
exports.updatePassSeller = async (req, res) => {
  try {
    const salt = 10;
    const password = bcrypt.hashSync(req.body.password, salt);
    const updatedPass = await sellers.findByIdAndUpdate(req.user._id, {password: password}, {new: true});

    res.status(200).send({msg: "Password updated successfully", updatedPass});
  } catch (error) {
    res.status(500).send({msg: "Password not update"});
  }
};

//method Update
// API : /updatePhotoUser
exports.updatePhotoSeller = async (req, res) => {
  try {
    const updated = await sellers.findByIdAndUpdate(
      req.user._id,
      {$set: {...req.body, photo: req.file.filename}},
      {new: true}
    );
    res.status(200).send({msg: "Photo updated successfully", updated});
  } catch (error) {
    res.status(500).send({msg: "Could not update photo"});
  }
};

//get messages
//API /SellerMsgs
exports.myMsgs = async (req, res) => {
  try {
    const message = await contacts.find({sellerId: req.user._id});
    res.status(200).send({msg: "List of messages", message});
  } catch (error) {
    res.status(500).send({msg: "Could get messages"});
  }
};

//delete message
//API /deletetheMsg/:id
exports.deletetheMsg = async (req, res) => {
  try {
    await contacts.findByIdAndDelete(req.params.id);
    res.status(200).send({msg: "Message deleted"});
  } catch (error) {
    res.status(500).send("ould not delete message");
  }
};
