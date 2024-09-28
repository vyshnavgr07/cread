const express=require('express');
const morgan=require('morgan')
const cors=require('cors')
const errorHandler=require('./src/middleware/errorHandler')
const userRouter=require('./src/routes/userRoutes')
const app=express();
app.use(cors())
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use(userRouter)
app.use(errorHandler)



    






   module.exports=app;