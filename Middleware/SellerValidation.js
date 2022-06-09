const { body, validationResult } = require("express-validator");

exports.registerValidationSeller = [
  body("name", "Empty firstName ! please enter your name").notEmpty(),
  body("email", "please enter a correct email").isEmail(),
  body("phone_number", "Your phone number should be 8 numbers").isLength({
    min: 8,
    max: 8,
  }),
  body("password", "password should be at least 8 caracter").isLength({
    min: 8,
  }),
];

exports.loginValidationSeller = [
  body("email", "please enter a correct email").isEmail(),
  body("password", "password should be at least 8 caracter").isLength({
    min: 8,
  }),
];

exports.validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
