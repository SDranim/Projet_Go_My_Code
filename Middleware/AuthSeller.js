const jwt = require("jsonwebtoken");
const sellers = require("../Models/SellerSchema");

exports.isAuthSeller = async (req, res, next) => {
  const token = req.headers["authorization"];
  try {
    if (!token) {
      return res.send("you are not autorized");
    }
    const decoded = jwt.verify(token, process.env.secretOrKey);
    const seller = await sellers.findById(decoded.id);
    req.seller = seller;
    next();
  } catch (error) {
    console.log("server error");
  }
};
