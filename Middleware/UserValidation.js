const { body, validationResult } = require('express-validator');

exports.registerValidation = [
    body("first_name",'Empty firstName ! please make a your personal name').notEmpty(),
    body("last_name",'Empty lastName ! please make a your personal name').notEmpty(),
    body("email","please make a correct email").isEmail(),
    body('phone_number',"Your phone number should be 8 numbers").isLength({ min: 8, max:8 }),
    body('password',"password should be at least 8 caracter").isLength({ min: 8 }),
];


exports.validation =(req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
}