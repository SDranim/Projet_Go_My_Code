const sellers = require("../Models/SellerSchema")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//register
exports.registerSeller= async (req, res) => {
  const { email, password } = req.body;
  try {
    const found = await sellers.findOne({ email });
    if (found) {
      res.status(400).send({ msg: "seller already exist" });
    }
    const newSeller = new sellers(req.body);
    //bcrypt : cryptage password
    const salt = 10;
    const hashPassword = bcrypt.hashSync(password, salt);
    newSeller.password = hashPassword;
    //jwt
    const payload = { id: newSeller._id };
    const token = jwt.sign(payload, process.env.secretOrKey);
    
    await newSeller.save();

    res.status(200).send({ msg: "registred with success", newSeller, token });
  } catch (error) {
    res.status(500).send({ msg: "could not register" });
  }
};

//login
exports.loginSeller = async (req, res) => {
  const { email, password } = req.body;
  try {
    const foundSeller = await sellers.findOne({ email });
    if (!foundSeller) {
      return res.status(400).send("bad credentials");
    }
    const match = await bcrypt.compareSync(password, foundSeller.password);
    if (!match) {
      return res.status(400).send("bad credentials");
    }
    //jwt
    const payload = { id: foundSeller._id };
    const token = jwt.sign(payload, process.env.secretOrKey);

    res.status(200).send({ msg: "login with success", foundSeller, token });
  } catch (error) {
    res.status(500).send({ msg: "could not login" });
  }
};
