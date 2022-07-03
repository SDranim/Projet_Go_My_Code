const users = require("../Models/UserSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//register
//API /registerUser
exports.registerUser = async (req, res) => {
  const {email, password} = req.body;
  try {
    const found = await users.findOne({email});
    if (found) {
      res.status(400).send({msg: "User already exists"});
    }
    const newUser = new users(req.body);

    //bcrypt : cryptage password
    const salt = 10;
    const hashPassword = bcrypt.hashSync(password, salt);
    newUser.password = hashPassword;
    //jwt
    const payload = {id: newUser._id};
    const token = jwt.sign(payload, process.env.secretOrKey);

    await newUser.save();

    res.status(200).send({msg: "Registred with success", newUser, token});
  } catch (error) {
    res.status(500).send({msg: "Could not register"});
  }
};

//login
//API /loginUser
exports.loginUser = async (req, res) => {
  const {email, password} = req.body;
  console.log(req.body);
  try {
    const foundUser = await users.findOne({email});
    console.log(foundUser);
    if (!foundUser) {
      return res.status(400).send("Bad credentials");
    }
    const match = bcrypt.compareSync(password, foundUser.password);

    if (!match) {
      return res.status(400).send("Bad credentials");
    }
    //jwt
    const payload = {id: foundUser._id};
    const token = jwt.sign(payload, process.env.secretOrKey);

    res.status(200).send({msg: "Login with success", foundUser, token});
  } catch (error) {
    res.status(500).send({msg: "Could not login"});
  }
};
