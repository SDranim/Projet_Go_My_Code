const users = require("../Models/UserSchema");
const contacts = require("../Models/ContactSellerSchema");
const bcrypt = require("bcrypt");
const sellers = require("../Models/SellerSchema");

//get profil seller
//API : /profilSeller/:id
exports.getsellerProfil = async (req, res) => {
  try {
    const sellerInfo = await sellers.findById(req.params.id);
    res.status(200).send({msg: "Seller profile:", sellerInfo});
  } catch (error) {
    res.status(500).send("Could not get user info");
  }
};

//delete profil
//API : /deleteprofilUser/:id
exports.deleteProfil = async (req, res) => {
  try {
    await users.findByIdAndDelete(req.user._id);
    res.status(200).send({msg: "Account deleted"});
  } catch (error) {
    res.status(500).send({msg: "Could not delete"});
  }
};

//update
//API : /updateprofilUser/:id
exports.updateprofil = async (req, res) => {
  try {
    const updated = await users.findByIdAndUpdate(req.user._id, {$set: {...req.body}}, {new: true});

    res.status(200).send({msg: "Account updated successfully", updated});
  } catch (error) {
    res.status(500).send({msg: "Could not update"});
  }
};

//update password
//API /updatePasswordUser
exports.updatePassUser = async (req, res) => {
  try {
    const salt = 10;
    const password = bcrypt.hashSync(req.body.password, salt);
    const updatedPass = await users.findByIdAndUpdate(req.user._id, {password: password}, {new: true});

    res.status(200).send({msg: "Password updated successfully", updatedPass});
  } catch (error) {
    res.status(500).send({msg: "Password not update"});
  }
};

//method Update
// API : /updatePhotoUser
exports.updatePhotoUser = async (req, res) => {
  try {
    const updated = await users.findByIdAndUpdate(
      req.user._id,
      {$set: {...req.body, photo: req.file.filename}},
      {new: true}
    );
    res.status(200).send({msg: "Photo updated successfully", updated});
  } catch (error) {
    res.status(500).send({msg: "Could not update photo"});
  }
};

// method POST
// API : /contactSeller
exports.contactSeller = async (req, res) => {
  try {
    const newContactS = new contacts({...req.body, sellerId: req.params.id, userId: req.user._id});
    await newContactS.save();
    res.status(200).send({msg: "Message sent successfully", newContactS});
  } catch (error) {
    res.status(500).send("Could not send message");
  }
};
