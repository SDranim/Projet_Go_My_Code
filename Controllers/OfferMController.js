const offers = require("../Models/OfferSchema");

//add offer
//API /addOffer
exports.addOffer = async (req, res) => {
 const {title,category,date,description}=req.body
 console.log(title)
 console.log(category)
 console.log(date)
 console.log(description)
 console.log(req.user._id)
  try {
    const newOffer = new offers({title, category,date,description, sellerId:req.user._id,photo:req.file.filename});
    console.log(newOffer)
    await newOffer.save();
    res.status(200).send({ msg: "offer added succesfully", newOffer });
  } catch (error) {
    res.status(500).send("could not add");
  }
};

//update offer
//API /updateOffer/:id
exports.updateOffer = async (req, res) => {
  try {
    const updatedOffer = await offers.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).send({ msg: "offer updated successfully", updatedOffer });
  } catch (error) {
    res.status(400).send("could not update");
  }
};

//delete offer
//API /deleteOffer/:id
exports.deleteOffer = async (req, res) => {
  try {
    await offers.findByIdAndDelete(req.params.id);
    console.log(req.params.id)
    res.status(200).send({ msg: "offer deleted " });
  } catch (error) {
    res.status(400).send("could not delete");
  }
};

//get all offers
//API /alloffers
exports.getAllOffers = async (req, res) => {
  try {
    const allOffers = await offers.find().populate("sellerId", "-password");
    res.status(200).send({ msg: "list of offers", allOffers });
  } catch (error) {
    res.status(400).send("could not get offers");
  }
};

//get my offers
// API /myoffers
exports.getMyOffers = async (req, res) => {
  try {
    const myOffers = await offers.find({ sellerId: req.user.id });
    res.status(200).send({ msg: "list of offers", myOffers });
  } catch (error) {
    res.status(400).send("could not get offers");
  }
};
//get seller offers
// API /selleroffres
exports.getSellerOffers = async (req, res) => {
  try {
    const sellerOffers = await offers.find({ sellerId: req.params.id });
    res.status(200).send({ msg: "list of offers", sellerOffers });
  } catch (error) {
    res.status(400).send("could not get offers");
  }
};
