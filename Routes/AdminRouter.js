const express = require ('express');
const { getUsers, deleteUser, getSellers, deleteSeller, getMsgs, deleteMsg } = require('../Controllers/AdminController');
const { getAllOffers, deleteOffer } = require('../Controllers/OfferMController');
const { isAdmin } = require('../Middleware/AuthAdmin');
const { isAuthUser } = require('../Middleware/AuthUser');
const AdminRouter=express.Router();

//get all users
AdminRouter.get("/allUsers",isAuthUser,isAdmin,getUsers)

//delete user
AdminRouter.delete("/deleteUser/:id",isAuthUser,isAdmin,deleteUser)

//get all sellers
AdminRouter.get("/allSellers",isAuthUser,isAdmin,getSellers)

//delete seller
AdminRouter.delete("/deleteseller/:id",isAuthUser,isAdmin,deleteSeller)

//get all offers 
AdminRouter.get("/allOffers",isAuthUser,isAdmin,getAllOffers)

//delete Offer
AdminRouter.delete("/deleteOffer/:id",isAuthUser,isAdmin,deleteOffer);

//get messages
AdminRouter.get("/allMsgs",isAuthUser,isAdmin,getMsgs)

//delete message
AdminRouter.delete("/deleteMsg/:id",isAuthUser,isAdmin,deleteMsg)




module.exports=AdminRouter;