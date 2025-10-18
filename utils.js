const jwt= require("jsonwebtoken")


const generateToken=(user)=>{

   return jwt.sign({name:'ankush'},process.env.secret_key,{
    expiresIn:"15m"
   })
}

const generateRefreshToken=()=>{

    return jwt.sign({name:'ankush'},process.env.refresh_key,{expiresIn:'30m'})
}



module.exports={generateToken,generateRefreshToken}