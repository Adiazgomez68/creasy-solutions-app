const {Users}=require('../../model/users/model.users.js');
const bcrypt = require('bcrypt');
require('dotenv').config();


const userRegistertHandler=async (req,res)=>{
    
    const {name,email, lastName,rol,active,password}=req.body
    const response= await Users.findOne({email});
    if(response) return res.status(400).send('user already registered.')
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(password,salt);

    const user=new Users({name,email, lastName,rol,active,password:hash,dateRegister:Date.now()})
    await user.save();
    res.send('Successfully registered');
    res.end();
}

const userUpdatetHandler=async (req,res)=>{
    
    const {name,email, lastName,rol,active,password}=req.body
    const response= await Users.findOne({email});
    if(response) return res.status(400).send('user already registered.')
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(password,salt);

    const user=new Users({name,email, lastName,rol,active,password:hash,dateRegister:Date.now()})
    await user.save();
    res.send('Successfully registered');
    res.end();
}

module.exports={
    userRegistertHandler,
    userUpdatetHandler,
}



