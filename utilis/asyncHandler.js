/** in this we are getting promise so we resolve and catch in catch we pass the err in next part so we can do your work  */

const asyncHandler=(requestHandler) => {
  (req,res,next)=>{
    Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
  }

}

export {asyncHandler}


/** 
 * this use when we use try catch above one is promise
const asyncHandler=(fn) =>async(req,res,next)=>{

    try {
        
       await fn(req,res,nex)

    } catch (error) {
        console.log(err.code||500).json({
            success:false,
            message:err.message

        });
    }
 }
 */