const express = require("express");
const {
  registerUser,
  loginUser,
} = require("../Controllers/AuthUserController");
const {
  validation,
  registerValidationUser,
  loginValidationUser,
} = require("../Middleware/UserValidation");
const AuthUserRouter = express.Router();

//register
AuthUserRouter.post(
  "/registerUser",
  registerValidationUser,
  validation,
  registerUser
);

//login
AuthUserRouter.post("/loginUser", loginValidationUser, validation, loginUser);

module.exports = AuthUserRouter;
