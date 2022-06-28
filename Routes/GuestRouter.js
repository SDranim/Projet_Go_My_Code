const express = require("express");
const { Contact } = require("../Controllers/GuestContactController")
const guestRouter = express.Router();
const {getSellers} = require ("../Controllers/AdminController");
const { getAllOffers } = require("../Controllers/OfferMController");
//Contact Us
//method post
guestRouter.post("/contactUs", Contact);

//get all sellers
guestRouter.get("/allSellers",getSellers);

//get all Offers
guestRouter.get("/allOffers", getAllOffers );


module.exports = guestRouter;