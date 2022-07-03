const offers = require("../Models/OfferSchema");

//add offer
//API /addOffer
exports.addOffer = async (req, res) => {
  const {title, category, date, description} = req.body;
  console.log(title);
  try {
    const newOffer = new offers({
      title,
      category,
      date,
      description,
      sellerId: req.user._id,
      photo: req.file.filename,
    });
    await newOffer.save();
    res.status(200).send({msg: "Offer added succesfully", newOffer});
  } catch (error) {
    res.status(500).send("Could not add");
  }
};

//update offer
//API /updateOffer/:id
exports.updateOffer = async (req, res) => {
  console.log(req.file);
  try {
    const updatedOffer = await offers.findByIdAndUpdate(req.params.id, {$set: {...req.body}}, {new: true});
    res.status(200).send({msg: "Offer updated successfully", updatedOffer});
  } catch (error) {
    res.status(500).send("Could not update");
  }
};

//update image
exports.updatePhotoOffer = async (req, res) => {
  try {
    const updatedphoto = await offers.findByIdAndUpdate(
      req.params.id,
      {$set: {photo: req.file.filename}},
      {new: true}
    );
    res.status(200).send({msg: "Photo updated successfully", updatedphoto});
  } catch (error) {
    res.status(500).send({msg: "Could not update photo"});
  }
};

//delete offer
//API /deleteOffer/:id
exports.deleteOffer = async (req, res) => {
  try {
    await offers.findByIdAndDelete(req.params.id);
    console.log(req.params.id);
    res.status(200).send({msg: "Offer deleted "});
  } catch (error) {
    res.status(500).send("Could not delete");
  }
};

//get all offers
//API /alloffers
exports.getAllOffers = async (req, res) => {
  try {
    const allOffers = await offers.find().populate("sellerId", "-password");
    res.status(200).send({msg: "List of offers", allOffers});
  } catch (error) {
    res.status(500).send("Could not get offers");
  }
};

//get my offers
// API /myoffers
exports.getMyOffers = async (req, res) => {
  try {
    const myOffers = await offers.find({sellerId: req.user.id});
    res.status(200).send({msg: "List of offers", myOffers});
  } catch (error) {
    res.status(500).send("Could not get offers");
  }
};

//get seller offers
// API /selleroffres
exports.getSellerOffers = async (req, res) => {
  try {
    const sellerOffers = await offers.find({sellerId: req.params.id});
    res.status(200).send({msg: "List of offers", sellerOffers});
  } catch (error) {
    res.status(500).send("Could not get offers");
  }
};

//find offer
exports.Findoffer = async (req, res) => {
  const {title} = req.params;
  try {
    const allFindOffers = await offers
      .find({$or: [{title: {$regex: title.toLowerCase().trim()}}]})
      .populate("sellerId", "-password");
    res.status(200).send({msg: "List of found offers", allFindOffers});
  } catch (error) {
    res.status(500).send("Could not found offers");
  }
};
