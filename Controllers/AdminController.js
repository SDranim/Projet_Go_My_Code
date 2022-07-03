const sellers = require("../Models/SellerSchema");
const users = require("../Models/UserSchema");
const contacts = require("../Models/GuestContactSchema");

//get users
//API /allUsers
exports.getUsers = async (req, res) => {
  try {
    const allUsers = await users.find({role: "user"}).select("-password");
    res.status(200).send({msg: "List of users", allUsers});
  } catch (error) {
    res.status(500).send("Could not get users");
  }
};

//delete user
//API /deleteUser/:id
exports.deleteUser = async (req, res) => {
  try {
    await users.findByIdAndDelete(req.params.id);
    res.status(200).send({msg: "User account deleted"});
  } catch (error) {
    res.status(500).send({msg: "Could not delete user"});
  }
};

//find sellers
//API /allSellers
exports.getSellers = async (req, res) => {
  try {
    const allSellers = await sellers.find({role: "seller"}).select("-password");
    res.status(200).send({msg: "List of sellers", allSellers});
  } catch (error) {
    res.status(500).send("Could not get sellers");
  }
};

//delete seller
//API /deleteSeller/:id
exports.deleteSeller = async (req, res) => {
  try {
    await sellers.findByIdAndDelete(req.params.id);
    res.status(200).send({msg: "Seller account deleted"});
  } catch (error) {
    res.status(500).send({msg: "Could not delete seller"});
  }
};

//get messages
//API /allMsgs
exports.getMsgs = async (req, res) => {
  try {
    const msgs = await contacts.find();
    res.status(200).send({msg: "list of messages", msgs});
  } catch (error) {
    res.status(500).send("Could not get messages");
  }
};

//delete message
//API /deleteMsg/:id
exports.deleteMsg = async (req, res) => {
  try {
    await contacts.findByIdAndDelete(req.params.id);
    res.status(200).send({msg: "Message deleted"});
  } catch (error) {
    res.status(500).send("Could not delete message");
  }
};
