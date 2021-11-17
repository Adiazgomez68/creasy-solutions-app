const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.MONGOOSE_URI)
    .then(_=>console.log('DB connection successfully'))
    .catch(err=>console.log(err));



const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    rol:{
        type:String,
        required:true,
    },
    active:{
        type:Boolean,
        required:false,
    },
    dateRegister:{
        type:Date,
        required:true
    },
    dateUpdate:{
        type:Date,
        required:false,
    }

});

const Users = mongoose.model('users', userSchema);

module.exports={
    Users,
}

