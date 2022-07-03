const {body, validationResult} = require("express-validator");

exports.registerValidationUser = [
  body("first_name", "Empty firstName ! please enter your personal name").notEmpty().trim(),
  body("last_name", "Empty lastName ! please enter your last name").notEmpty().trim(),
  body("email", "please enter a correct email").isEmail().trim(),
  body("password", "password should be at least 8 caracter")
    .isLength({
      min: 8,
    })
    .trim(),
];

exports.loginValidationUser = [
  body("email", "please enter a correct email").isEmail().trim(),
  body("password", "password should be at least 8 caracter")
    .isLength({
      min: 8,
    })
    .trim(),
];

exports.passwordValidationUser = [
  body("password", "Password must be at least 8 caracter").isLength({min: 8}).trim(),
];

exports.contactValidation = [
  body("first_name", "Empty firstName ! please enter your personal name").notEmpty().trim(),
  body("last_name", "Empty lastName ! please enter your last name").notEmpty().trim(),
  body("email", "Please make a correct email").isEmail().trim(),
  body("message", "Message must be not empty").notEmpty().trim(),
  body("phone_number", "phone_number must be not empty").notEmpty().trim(),
];

exports.validationUser = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()});
  }
  next();
};
