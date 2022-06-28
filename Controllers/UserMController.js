const users = require("../Models/UserSchema");
const contacts = require("../Models/ContactSellerSchema");
const bcrypt = require("bcrypt");
const sellers=require("../Models/SellerSchema")

// //get profil
// //API : /myprofilUser/:id
// exports.getMyProfil = async (req, res) => {
//   try {
//     const myinfo = await users.findById(req.params.id);
//     res.status(200).send({ msg: "My info : ", myinfo });
//   } catch (error) {
//     res.status(400).send("could not get user info");
//   }
// };

//get profil seller
//API : /profilSeller/:id
exports.getsellerProfil = async (req, res) => {
  try {
    const sellerInfo = await sellers.findById(req.params.id);
    res.status(200).send({ msg: "My info : ",sellerInfo });
  } catch (error) {
    res.status(400).send("could not get user info");
  }
};

//delete profil
//API : /deleteprofilUser/:id
exports.deleteProfil = async (req, res) => {
  try {
    await users.findByIdAndDelete(req.user._id);
    res.status(200).send({ msg: "account deleted" });
  } catch (error) {
    res.status(400).send({ msg: "could not delete" });
  }
};

//update
//API : /updateprofilUser/:id
exports.updateprofil = async (req, res) => {
  try {
    const updated = await users.findByIdAndUpdate(
      req.user._id, {$set:{...req.body}} ,{new:true}
    );

    res.status(200).send({ msg: "account updated successfully", updated });
  } catch (error) {
    res.status(400).send({ msg: "could not update" });
  }
};

//update password
//API /updatePasswordUser
exports.updatePassUser = async (req, res) => {
  try {
    const salt = 10;
    const password = bcrypt.hashSync(req.body.password, salt);
    const updatedPass = await users.findByIdAndUpdate(
      req.user._id,
      { password: password },
      { new: true }
    );

    res.status(200).send({ msg: "password updated successfully", updatedPass });
  } catch (error) {
    res.status(400).send({ msg: "password not update" });
  }
};


//method Update
// API : /updatePhotoUser
exports.updatePhotoUser=async(req,res)=>{
    
  try {
      const updated= await users.findByIdAndUpdate(req.user._id, {$set:{...req.body,photo:req.file.filename}} ,{new:true})
  res.status(200).send({msg:"photo updated successfully",updated})        
  } catch (error) {
      res.status(500).send({msg:"could not update photo"})        
  }
}

// method POST
// API : /contactSeller
exports.contactSeller = async (req, res) => {
  try {
    const newContactS = new contacts({...req.body,sellerId:req.params.id,userId:req.use._id});
    await newContactS.save();
    res.status(200).send({ msg: "Message sent successfully", newContactS });
  } catch (error) {
    res.status(400).send("could not send the message");
  }
};
