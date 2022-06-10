const express = require("express");
const { addOffer, updateOffer, deleteOffer } = require("../Controllers/OfferMController");
const {
  getsellerProfil,
  deleteProfilSeller,
  updateprofilSeller,
} = require("../Controllers/SellerMController");
const { isAuth, isAuthSeller } = require("../Middleware/AuthSeller");
const SellerMRouter = express.Router();

//get profil seller
SellerMRouter.get("/profilSeller/:id", isAuthSeller, getsellerProfil);

//delete profil seller
SellerMRouter.delete("/deleteprofilSeller/:id", isAuthSeller, deleteProfilSeller);

//update profil seller
SellerMRouter.put("/updateprofilSeller/:id", isAuthSeller, updateprofilSeller);

//add offer
SellerMRouter.post("/addOffer", isAuthSeller, addOffer);

//update offer 
SellerMRouter.put("/updateOffer/:id",isAuthSeller,updateOffer);

//delete offer 
SellerMRouter.delete("/deleteOffer/:id",isAuthSeller,deleteOffer);


module.exports = SellerMRouter;
