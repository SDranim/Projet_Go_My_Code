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
  updatePhotoSeller,
} = require("../Controllers/SellerMController");
const { isAuth, isAuthSeller } = require("../Middleware/AuthSeller");
const { upload } = require("../Middleware/Upload");
const SellerMRouter = express.Router();


//delete profil seller
SellerMRouter.delete( "/deleteprofilSeller", isAuthSeller, deleteProfilSeller);

//update profil seller
SellerMRouter.put("/updateprofilSeller", isAuthSeller, updateprofilSeller);

//update password
SellerMRouter.put("/updatePasswordSeller", isAuthSeller, updatePassSeller);

//add offer
SellerMRouter.post("/addOffer", isAuthSeller, addOffer);

//update offer
SellerMRouter.put("/updateOffer/:id", isAuthSeller, updateOffer);

//delete offer
SellerMRouter.delete("/deleteOffer/:id", isAuthSeller, deleteOffer);

//get my offers
SellerMRouter.get("/myOffers", isAuthSeller, getMyOffers);

//get all messages
SellerMRouter.get("/myMsgs", isAuthSeller, myMsgs);

//update photo 
SellerMRouter.put("/updatePhotoSeller",isAuthSeller,upload.single('imageSeller'),updatePhotoSeller)


//delete message
SellerMRouter.delete("/deletetheMsg/:id", isAuthSeller, deletetheMsg);

module.exports = SellerMRouter;
