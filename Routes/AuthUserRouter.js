const express = require("express");
const {
  registerUser,
  loginUser,
} = require("../Controllers/AuthUserController");
const { isAuthUser } = require("../Middleware/AuthUser");
const {
  validation,
  registerValidationUser,
  loginValidationUser,
} = require("../Middleware/UserValidation");
const AuthUserRouter = express.Router();

//register user
AuthUserRouter.post(
  "/registerUser",
  registerValidationUser,
  validation,
  registerUser
);

//login user
AuthUserRouter.post("/loginUser", loginValidationUser, validation, loginUser);

//get
AuthUserRouter.get("/currentUser", isAuthUser, (req, res, next) => {
  res.send({ user: req.user });
});

module.exports = AuthUserRouter;
