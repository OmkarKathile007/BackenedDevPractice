import mongoose,{Schema} from 'mongoose'

import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"


const userSchema=new Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,
            lowecase:true,
            trim:true,
            /// for searchable optimization
            index:true

        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowecase:true,
            trim:true,
           
        },
        fullname:{
            type:String,
            required:true,
            trim:true,
            index:true,
        },
        avatar:{
            type:String,// cloudinary url storage aws Type service
            required:true,


        },
        coverImage:{
            type:String,
        },
        watchHistory:{
            type:Schema.typeOf.ObjectId,
            ref:""
        },
        password:{
           type:String,
           required:[true,"Password is Required"]
        },
        refreshToken:{
            type:String,

        }
    }
,{timestamps:true})

userSchema.pre("save",async function(next){

    if(!this.isModified("password")){
       return next()
    }              //bcrypt perform encryption and decryption of the data
     this.password=bcrypt.hash(this.password,10);
     next()
})

userSchema.methods.isPasswordCorrect=async function(password){
      return await bcrypt.compare(password,this.password)
}

userSchema.methods.isPasswordCorrect=async function(password){
    return await bcrypt.compare(password,this.password);
}


export const User=new mongoose.model("User",userSchema);

///lecture 10 completed till-> 35.00 chai aur code