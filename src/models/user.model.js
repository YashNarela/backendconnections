import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema=new Schema(
    {
  username:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true,
    index:true

  },
  email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true,
   
  },
  fullName:{
    type:String,
    required:true,
    trim:true,
    index:true

  },
  avatar:{
    type:String,// cloudnary url service we use
    required:true
  },
  coverimage:{
    type:String
  },
  watchHistory:[
{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Video"
}

  ],
  password:{
     type:String,
     required:[true,"password is required"]

  },
  refreshToken:{
    type:String,

  }


},{ timestamps:true}

)
userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next()/** isModified is method in which we pass AS a string yaadi password cchange nhi hua h toh simply aage baad jao */
    this.password=bcrypt.hash(this.password,10)
    next() /** whenwver we use next in function last m call kro usko */
})
/** we check bhai password sahi bhi h ki nhi  user toh enter 1232 j sab karega to ab usko encrypt wale password se compare krna padega */
userSchema.methods.isPasswordCorrect= async function(password){
   return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateAccessToken=function(){
  return  jwt.sign({
        _id:this._id,
        email:this.email,
        username:this.username,
        fullName:this.fullName


    },
    process.env.ACCESS_TOKEN_SECERT,{
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    }
    
    
    )
 
}
userSchema.methods.generateRefreshToken=function(){


    return  jwt.sign({
        _id:this._id,
      
    },
    process.env.REFRESH_TOKEN_SECERT,{
        expiresIn:process.env. REFERSH_TOKEN_EXPIRY
    }
    
    
    )


}

export const User=mongoose.model("User",userSchema)