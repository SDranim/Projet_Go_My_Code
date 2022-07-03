const express = require("express");
const {Contact} = require("../Controllers/GuestContactController");
const guestRouter = express.Router();
const {getSellers} = require("../Controllers/AdminController");
const {getAllOffers} = require("../Controllers/OfferMController");
const {contactValidation, validationUser} = require("../Middleware/UserValidation");

//Contact Us
guestRouter.post("/contactUs", contactValidation, validationUser, Contact);

//get all sellers
guestRouter.get("/allSellers", getSellers);

//get all Offers
guestRouter.get("/allOffers", getAllOffers);

module.exports = guestRouter;
