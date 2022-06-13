const sellers = require("../Models/SellerSchema");
const users = require("../Models/UserSchema");
const contacts = require("../Models/GuestContactSchema");

//get users
//API /allUsers
exports.getUsers = async (req, res) => {
  try {
    const allUsers = await users.find({ role: "user" }).select("-password");
    res.status(200).send({ msg: "list of users", allUsers });
  } catch (error) {
    res.status(400).send("could not get Candidats");
  }
};

//delete user
//API /deleteUser/:id
exports.deleteUser = async (req, res) => {
  try {
    await users.findByIdAndDelete(req.params.id);
    res.status(200).send({ msg: "user account deleted" });
  } catch (error) {
    res.status(400).send({ msg: "could not delete user" });
  }
};

//find sellers
//API /allSellers
exports.getSellers = async (req, res) => {
  try {
    const allSellers = await sellers
      .find({ role: "seller" })
      .select("-password");
    res.status(200).send({ msg: "list of sellers", allSellers });
  } catch (error) {
    res.status(400).send("could not get Candidats");
  }
};

//delete seller
//API /deleteSeller/:id
exports.deleteSeller = async (req, res) => {
  try {
    await sellers.findByIdAndDelete(req.params.id);
    res.status(200).send({ msg: "seller account deleted" });
  } catch (error) {
    res.status(400).send({ msg: "could not delete seller" });
  }
};

//get messages
//API /allMsgs
exports.getMsgs = async (req, res) => {
  try {
    const msgs = await contacts.find();
    res.status(200).send({ msg: "list of messages", msgs });
  } catch (error) {
    res.status(400).send("could not get messages");
  }
};

//delete message
//API /deleteMsg/:id
exports.deleteMsg = async (req, res) => {
  try {
    await contacts.findByIdAndDelete(req.params.id);
    res.status(200).send({ msg: "Message deleted" });
  } catch (error) {
    res.status(400).send("could not delete message");
  }
};
