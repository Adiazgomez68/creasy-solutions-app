const express=require('express');
const router=express.Router();
const {userRegistertHandler,userUpdatetHandler,userLoginHandler}=require('../../controller/users/users.controller.js')
router.post('/user/register',userRegistertHandler)
router.put('/user/register',userUpdatetHandler)
router.post('/user/login',userLoginHandler)


module.exports=router;