const express=require('express');
const { registerUser } = require('../Controllers/UserController');
const { registerValidation, validation } = require('../Middleware/UserValidation');
const AuthUserRouter=express.Router();

AuthUserRouter.post('/registerUser',registerValidation,validation,registerUser)


module.exports= AuthUserRouter;