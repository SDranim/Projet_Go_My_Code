const express = require("express");
const {
  registerSeller,
  loginSeller,
} = require("../Controllers/AuthSellerController");
const {
  registerValidationSeller,
  validation,
  loginValidationSeller,
} = require("../Middleware/SellerValidation");

const AuthSellerRouter = express.Router();

//register
AuthSellerRouter.post(
  "/registerSeller",
  registerValidationSeller,
  validation,
  registerSeller
);

//login
AuthSellerRouter.post(
  "/loginSeller",
  loginValidationSeller,
  validation,
  loginSeller
);

module.exports = AuthSellerRouter;
