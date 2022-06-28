const express = require("express");
const { getsellerProfil } = require("../Controllers/UserMController");
const {
  getMyProfil,
  deleteProfil,
  updateprofil,
  contactSeller,
  updatePassUser,
  updatePhotoUser,
} = require("../Controllers/UserMController");
const { isAuthUser } = require("../Middleware/AuthUser");
const { upload } = require("../Middleware/Upload");
const UserMRouter = express.Router();

// //get profil user
// UserMRouter.get("/myprofilUser", isAuthUser, getMyProfil);

//get profil seller
UserMRouter.get("/profilseller", isAuthUser, getsellerProfil);

//delete profil user
UserMRouter.delete("/deleteprofilUser", isAuthUser, deleteProfil);

//update profil user
UserMRouter.put("/updateprofilUser", isAuthUser, updateprofil);

//update password
UserMRouter.put("/updatePasswordUser", isAuthUser, updatePassUser);

//update photo
UserMRouter.put("/updatePhotoUser", isAuthUser, upload.single("imageUser"), updatePhotoUser);

//contact seller
UserMRouter.post("/contactSeller", isAuthUser, contactSeller);

module.exports = UserMRouter;
