const express = require("express");
const {registerSeller, loginSeller} = require("../Controllers/AuthSellerController");
const {isAuthSeller} = require("../Middleware/AuthSeller");
const {
  registerValidationSeller,
  validationSeller,
  loginValidationSeller,
} = require("../Middleware/SellerValidation");

const AuthSellerRouter = express.Router();

//register seller
AuthSellerRouter.post("/registerSeller", registerValidationSeller, validationSeller, registerSeller);

//login seller
AuthSellerRouter.post("/loginSeller", loginValidationSeller, validationSeller, loginSeller);

//get
AuthSellerRouter.get("/currentSeller", isAuthSeller, (req, res) => {
  res.send({user: req.user});
});

module.exports = AuthSellerRouter;
