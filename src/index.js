/// for availaibility of environment varibal accessible

// require('dotenv').config({path:'./env'})

import dotenv from "dotenv"




import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from 'express'
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})


///-----------------> Connection of Database <----------------


///---------------- Approach 1 ------------------------

connectDB()



//-------------------------- Approach 2 ----------------------
// const app=express()
// ;(async()=>{
//     try{
        
//        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//        app.on("error",(error)=>{
//         console.log("ERROR",error)
//         throw error
//        })

//        app.listen(process.env.PORT,()=>{
//         console.log(`App is Listening on Port ${process.env.PORT}`)
//        })

//     }catch(error){
//         console.log("ERROR:",error)
//         throw error
//     }
// })()


