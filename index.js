const express = require('express')
const app =express()
const dotenv= require('dotenv')
const connectDB = require('./config/db')
const leadRouter = require('./routes/lead')
const userRouter = require('./routes/user')
const cors = require('cors')

app.use(cors({
   origin:'*',
   credentials:true
}))
dotenv.config()
connectDB()
app.use(express.json())
app.use('/api/v1/lead',leadRouter)
app.use('/api/v1/user',userRouter)
port = process.env.PORT || 6000

app.listen(port,()=>{
   console.log( `app running on ${port}`)
})