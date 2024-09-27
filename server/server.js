const app=require('./app')
const env=require('dotenv')
env.config({path:'./.env'})
const port=process.env.PORT;
const db=require('./src/dbconnect/conndctDb')


db()









app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})