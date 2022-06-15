const express = require("express");
const { Contact } = require("../Controllers/GuestContactController");
const guestRouter = express.Router();

//Contact Us
//method post
guestRouter.post("/contactUs", Contact);

module.exports = guestRouter;
