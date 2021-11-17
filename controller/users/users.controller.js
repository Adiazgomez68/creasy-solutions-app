const {Users}=require('../../model/users/model.users.js');
const bcrypt = require('bcrypt');
require('dotenv').config();


const userRegistertHandler=async (req,res)=>{
    
    const {name,email, lastName,rol,active,password}=req.body
    const response= await Users.findOne({email});
    if(response) return res.status(400).send('user already registered.')
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(password,salt);

    const user=new Users({name,email, lastName,rol,active,password:hash,dateRegister:Date.now(),dateUpdate:Date.now()})
    await user.save();
    res.send('Successfully registered');
    res.end();
}

const userUpdatetHandler=async (req,res)=>{
    
    const {name,email, lastName,rol,active,password}=req.body
    const response= await Users.findOne({email});
    if(!response) return res.status(400).send('User not registered yet')
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(password,salt);

    const user=await Users.findByIdAndUpdate({_id:response._id},{name,email, lastName,rol,active,password:hash,dateUpdate:Date.now()})
    await user.save();
    res.send('Successfully Updated');
    res.end();
}

module.exports={
    userRegistertHandler,
    userUpdatetHandler,
}



