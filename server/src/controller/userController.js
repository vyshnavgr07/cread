const userJoiSchema=require('../utils/joiValidation/userValidation')
const {signupservice,loginService}=require('../service/userService');
const User = require('../models/userSchema');

const signup=async(req,res,next)=>{
    try {
       const{value,error}=userJoiSchema.validate(req.body);
       
  if (error) {
        return res.status(400).json({
            message: 'Validation error',
            details: error
        });
    }
 const user=await signupservice(value)
return res.status(user.status).json({
    message:user.message,token:user.token
})

    } catch (error) {
        console.log(error,"err")
        next(error)
    }
}


const login=async(req,res,next)=>{
    try {
        const data=req.body;
        if(!data){
            return res.status(400).json({
                message: 'user credentail not provided',
                });
        }
const user=await loginService(data);
return res.status(user.status).json({
            message:user.message,token:user.token
        })
     

    } catch (error) {
        next(error)
    }
}

const specifiedUser=async(req,res,next)=>{
    try {
    const user=req.decoded.user
    const userid=user._id
     const users=await User.findOne({_id:userid})
     return res.status(200).json({
        message:'succefully fetched user',
        users
    })
    } catch (error) {
        next(error)
    }
}













module.exports={signup,login,specifiedUser}