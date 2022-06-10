const users = require("../Models/UserSchema");

//get profil
//API : /myprofilUser/:id
exports.getMyProfil = async (req, res) => {
  try {
    const myinfo = await users.findById(req.params.id);
    res.status(200).send({ msg: "My info : ", myinfo });
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
      req.user._id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).send({ msg: "account updated successfully", updated });
  } catch (error) {
    res.status(400).send({ msg: "could not update" });
  }
};
