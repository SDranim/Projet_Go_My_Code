const express = require("express");
const { getSellers } = require("../Controllers/AdminController");
const { Contact } = require("../Controllers/GuestContactController");
const { getAllOffers } = require("../Controllers/OfferMController");
const {
  getMyProfil,
  deleteProfil,
  updateprofil,
  contactSeller,
  updatePassUser,
} = require("../Controllers/UserMController");
const { isAuthUser } = require("../Middleware/AuthUser");
const { upload } = require("../Middleware/Upload");
const UserMRouter = express.Router();

//get profil user
UserMRouter.get("/myprofilUser/:id", isAuthUser, getMyProfil);

//delete profil user
UserMRouter.delete("/deleteprofilUser/:id", isAuthUser, deleteProfil);

//update profil user
UserMRouter.put("/updateprofilUser", isAuthUser,upload.single('photo'), updateprofil);

//update password
UserMRouter.put("/updatePasswordUser",isAuthUser,updatePassUser)

//get all offers
UserMRouter.get("/alloffers",getAllOffers)

//find sellers
UserMRouter.get('/allSellers',getSellers)

//contact seller
UserMRouter.post("/contactSeller",isAuthUser,contactSeller)

module.exports = UserMRouter;
