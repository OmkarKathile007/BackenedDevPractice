

// const asyncHandler=()=>{}

// const asyncHandler=(fn)=>{()=>{}}
// const asyncHandler=(fn)=>async(req,res)=>{}

// const asyncHandler =(fn)=>async(req,res,next)=>{
//     try{
//         await fn(req,res,next)
//     }
//     catch(error){
//         res.status(err.code||500).json({
//             success:false,
//             message:err.msg
//         })
//     }
// } 

 const asyncHandler=(requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
 }

 ///node js api error`




export {asyncHandler}