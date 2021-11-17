const express=require('express');
const router=express.Router();
const {userRegistertHandler,userUpdatetHandler}=require('../../controller/users/users.controller.js')
router.get('/user/register',userRegistertHandler)
router.put('/user/register',userUpdatetHandler)


module.exports=router;