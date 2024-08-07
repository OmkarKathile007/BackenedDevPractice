import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';

const app=express()

/// middleware configuration setting it is used for loading resorces is usec
// app.use(cors())

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

///

app.use(express.json({limit:"16kb"}))


////for url data retrieving  //extened= obj inside obj example->google/{%20=?87abd}
app.use(express.urlencoded({extended:true,limit:"16kb"}))


/// if we want to store pdf files/resources in server //public->folder data
app.use(express.static("public"))


//server accepting cookies from user brower and setting cookies from browser (secure cookies)=> 
app.use(cookieParser())
export default app;