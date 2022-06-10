const sellers = require('../Models/SellerSchema')

//get profil seller
//API : /profilSeller/:id
exports.getsellerProfil=async(req,res)=>{
    try {
        const myinfo = await sellers.findById(req.params.id)
        res.status(200).send({msg:"My info : ",myinfo})
    } catch (error) {
        res.status(400).send('could not get user info')        
    }
}

//delete profil seller
//API : /deleteprofilSeller/:id
exports.deleteProfilSeller=async(req,res)=>{
    try {
     await sellers.findByIdAndDelete(req.seller._id)
        res.status(200).send({msg:"account deleted",})
    } catch (error) {
        res.status(400).send({msg:"could not delete"}) 
    }
}

//update profil seller
//API : /updateprofilSeller/:id
exports.updateprofilSeller=async(req,res)=>{
   
    try {
        const updated= await sellers.findByIdAndUpdate(req.seller._id,{$set:req.body},{new:true})

    res.status(200).send({msg:"account updated successfully",updated})        
    } catch (error) {
        res.status(400).send({msg:"could not update"})
        
    }
}