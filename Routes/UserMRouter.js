const express = require("express");
const {Findoffer} = require("../Controllers/OfferMController");
const {getsellerProfil} = require("../Controllers/UserMController");
const {
  deleteProfil,
  updateprofil,
  contactSeller,
  updatePassUser,
  updatePhotoUser,
} = require("../Controllers/UserMController");
const {isAuthUser} = require("../Middleware/AuthUser");
const {upload} = require("../Middleware/Upload");
const {validationUser, contactValidation, passwordValidationUser} = require("../Middleware/UserValidation");
const UserMRouter = express.Router();

//Profile
//delete profil user
UserMRouter.delete("/deleteprofilUser", isAuthUser, deleteProfil);

//update profil user
UserMRouter.put("/updateprofilUser", isAuthUser, updateprofil);

//update password
UserMRouter.put("/updatePasswordUser", isAuthUser, validationUser, passwordValidationUser, updatePassUser);

//update photo
UserMRouter.put("/updatePhotoUser", isAuthUser, upload.single("imageUser"), updatePhotoUser);

//To Seller
//get profil seller
UserMRouter.get("/profilseller/:id", isAuthUser, getsellerProfil);

//contact seller
UserMRouter.post("/contactSeller/:id", isAuthUser, contactValidation, validationUser, contactSeller);

//Rechercher  un offre
//method get
UserMRouter.get("/Findoffers/:title", Findoffer);

module.exports = UserMRouter;
