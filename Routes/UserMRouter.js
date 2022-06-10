const express = require("express");
const {
  getMyProfil,
  deleteProfil,
  updateprofil,
} = require("../Controllers/UserMController");
const { isAuthUser } = require("../Middleware/AuthUser");
const UserMRouter = express.Router();

//get profil user
UserMRouter.get("/myprofilUser/:id", isAuthUser, getMyProfil);

//delete profil user
UserMRouter.delete("/deleteprofilUser/:id", isAuthUser, deleteProfil);

//update profil user
UserMRouter.put("/updateprofilUser/:id", isAuthUser, updateprofil);

module.exports = UserMRouter;
