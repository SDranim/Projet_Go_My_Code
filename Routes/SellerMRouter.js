const express = require("express");
const {
  addOffer,
  updateOffer,
  deleteOffer,
  getAllOffers,
  getMyOffers,
} = require("../Controllers/OfferMController");
const {
  getsellerProfil,
  deleteProfilSeller,
  updateprofilSeller,
  myMsgs,
  deletetheMsg,
  updatePassSeller,
} = require("../Controllers/SellerMController");
const { isAuth, isAuthSeller } = require("../Middleware/AuthSeller");
const SellerMRouter = express.Router();

//get profil seller
SellerMRouter.get("/profilSeller/:id", isAuthSeller, getsellerProfil);

//delete profil seller
SellerMRouter.delete(
  "/deleteprofilSeller/:id",
  isAuthSeller,
  deleteProfilSeller
);

//update profil seller
SellerMRouter.put("/updateprofilSeller/:id", isAuthSeller, updateprofilSeller);

//update password
SellerMRouter.put("/updatePasswordSeller", isAuthSeller, updatePassSeller);

//add offer
SellerMRouter.post("/addOffer", isAuthSeller, addOffer);

//update offer
SellerMRouter.put("/updateOffer/:id", isAuthSeller, updateOffer);

//delete offer
SellerMRouter.delete("/deleteOffer/:id", isAuthSeller, deleteOffer);

//get all offers
SellerMRouter.get("/allOffers", getAllOffers);

//get my offers
SellerMRouter.get("/myOffers", isAuthSeller, getMyOffers);

//get all messages
SellerMRouter.get("/myMsgs", isAuthSeller, myMsgs);

//delete message
SellerMRouter.delete("/deletetheMsg/:id", isAuthSeller, deletetheMsg);

module.exports = SellerMRouter;
