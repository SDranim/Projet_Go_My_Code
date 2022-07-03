const express = require("express");
const {
  addOffer,
  updateOffer,
  deleteOffer,
  getMyOffers,
  getSellerOffers,
  updatePhotoOffer,
} = require("../Controllers/OfferMController");
const {
  deleteProfilSeller,
  updateprofilSeller,
  myMsgs,
  deletetheMsg,
  updatePassSeller,
  updatePhotoSeller,
} = require("../Controllers/SellerMController");
const {isAuthSeller} = require("../Middleware/AuthSeller");
const {isAuthUser} = require("../Middleware/AuthUser");
const {validationSeller, passwordValidationSeller} = require("../Middleware/SellerValidation");
const {upload} = require("../Middleware/Upload");
const SellerMRouter = express.Router();

//Profile
//delete profil seller
SellerMRouter.delete("/deleteprofilSeller", isAuthSeller, deleteProfilSeller);

//update profil seller
SellerMRouter.put("/updateprofilSeller", isAuthSeller, updateprofilSeller);

//update password
SellerMRouter.put(
  "/updatePasswordSeller",
  isAuthSeller,
  validationSeller,
  passwordValidationSeller,
  updatePassSeller
);

//update photo
SellerMRouter.put("/updatePhotoSeller", isAuthSeller, upload.single("imageSeller"), updatePhotoSeller);

//Offer
//add offer
SellerMRouter.post("/addOffer", isAuthSeller, upload.single("offreImage"), addOffer);

//update image
SellerMRouter.put("/updateImage/:id", isAuthSeller, upload.single("newoffreImage"), updatePhotoOffer);

//update offer
SellerMRouter.put("/updateOffer/:id", updateOffer);

//delete offer
SellerMRouter.delete("/deleteOffer/:id", isAuthSeller, deleteOffer);

//get my offers
SellerMRouter.get("/myOffers", isAuthSeller, getMyOffers);

//get seller offers
SellerMRouter.get("/selleroffers/:id", isAuthUser, getSellerOffers);

//Messages
//get all messages
SellerMRouter.get("/SellerMsgs", isAuthSeller, myMsgs);

//delete message
SellerMRouter.delete("/deletetheMsg/:id", isAuthSeller, deletetheMsg);

module.exports = SellerMRouter;
