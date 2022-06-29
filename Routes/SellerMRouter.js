const express = require("express");
const {
  addOffer,
  updateOffer,
  deleteOffer,
  getAllOffers,
  getMyOffers,
  getSellerOffers,
  updatePhotoOffer,
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
const { isAuthSeller } = require("../Middleware/AuthSeller");
const { isAuthUser } = require("../Middleware/AuthUser");
const { upload } = require("../Middleware/Upload");
const SellerMRouter = express.Router();

//delete profil seller
SellerMRouter.delete("/deleteprofilSeller", isAuthSeller, deleteProfilSeller);

//update profil seller
SellerMRouter.put("/updateprofilSeller", isAuthSeller, updateprofilSeller);

//update password
SellerMRouter.put("/updatePasswordSeller", isAuthSeller, updatePassSeller);

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

//get all messages
SellerMRouter.get("/SellerMsgs", isAuthSeller, myMsgs);
//get seller offers
SellerMRouter.get("/selleroffers/:id", isAuthUser, getSellerOffers);

//update photo
SellerMRouter.put("/updatePhotoSeller", isAuthSeller, upload.single("imageSeller"), updatePhotoSeller);

//delete message
SellerMRouter.delete("/deletetheMsg/:id", isAuthSeller, deletetheMsg);

module.exports = SellerMRouter;
