const express=require('express');
const userRouter=express.Router()
const userController=require('../controller/userController');
const verifyToken = require('../middleware/verifyToken');

userRouter.post('/auth/signup',userController.signup)
.post('/auth/login',userController.login)
.get('/users',verifyToken,userController.specifiedUser)

   













module.exports=userRouter;