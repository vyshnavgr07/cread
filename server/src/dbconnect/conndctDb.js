const mongoose=require('mongoose');



function dbConnect(){
    console.log(process.env.DB_URL,"prorr") 
mongoose.connect(process.env.DB_URL) 
.then(()=>console.log('db connected'))
.catch((err)=>console.log(err,"error"))}

 




module.exports=dbConnect;