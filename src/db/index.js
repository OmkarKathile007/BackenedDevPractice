import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () =>{
    try{
        const ConnectionInstanc= await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${ConnectionInstanc.connection.host}`)
    }
    catch(error){
        console.log("MONGODB Connection Error",error);
        process.exit(1)
    }
}
export default connectDB

