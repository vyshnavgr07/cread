const bcrypt=require('bcryptjs');
const User=require('../models/userSchema')
const generateToken=require('../utils/generateToken')


const signupservice = async (value) => {
    const { username, email, password } = value;
    
    try {
       
        const existUser = await User.findOne({ email });
        if (existUser) {
            return { status: 400, message: 'User already exists' };
        }
const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

  
        const user = new User({ username, email, password: hash });
        await user.save();
 const token = await generateToken(user);

        return {
            status: 201,
            message: 'Successfully created user',
            token
        };
    } catch (error) {
        return {
            status: 500,
            message: 'Error creating user',
            error: error.message
        };
    }
};



const loginService=async(data)=>{
    try {
        const {email,password}=data
        if(!email,!password){
            return {status:400,
                message: 'email or password is missing'
        }}

       const  existUser=await User.findOne({email})

        if(!existUser){
            return {status:400,
                message: 'user does not exist'
        }
   }

   const hashed= bcrypt.compareSync(password,existUser.password)

   if(hashed){
    const token=await generateToken(existUser)
    return {status:200,message:"user loged in succesfully",token}
   }

} catch (error) {
    return {
        status: 500,
        message: 'Error creating user',
        error: error.message
    };
    }
}





module.exports={signupservice,loginService}









