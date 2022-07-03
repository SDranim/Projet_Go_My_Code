const {body, validationResult} = require("express-validator");

exports.registerValidationSeller = [
  body("name", "Empty firstName ! please enter your name").notEmpty().trim(),
  body("email", "please enter a correct email").isEmail().trim(),
  body("password", "password should be at least 8 caracter").isLength({min: 8}).trim(),
];

exports.loginValidationSeller = [
  body("email", "please enter a correct email").isEmail().trim(),
  body("password", "password should be at least 8 caracter")
    .isLength({
      min: 8,
    })
    .trim(),
];

exports.passwordValidationSeller = [
  body("password", "Password must be at least 8 caracter").isLength({min: 8}).trim(),
];

exports.validationSeller = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()});
  }
  next();
};
