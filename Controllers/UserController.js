const users=require('../Models/UserSchema');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

//register
//post
exports.registerUser=async(req,res)=>{
    const {email, password}=req.body
    try {
        const found = await  users.findOne({email})
        if (found){
            res.status(400).send({msg:"user already exist"})
        }
        const newUser= new users(req.body)
        
        //bcrypt : cryptage password
        const salt = 10;
        const hashPassword = bcrypt.hashSync(password, salt)
        newUser.password = hashPassword
        //jwt
        const payload = {id:newUser._id}
        const token = jwt.sign(payload,process.env.secretOrKey)
        
        await newUser.save()
        
        res.status(200).send({msg:"registred with success",newUser, token}) 
    } catch (error) {
        res.status(500).send({msg:'could not register'})
         
    }

}
