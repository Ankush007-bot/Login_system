
const jwt = require('jsonwebtoken')
const { generateToken } = require('../utils')

module.exports= async(req,res)=>{

    if(!req.body.refreshToken){ return res.status(400).send({
        'status':'refresh token is missing'
    })}
      
    let refreshToken=req.body.refreshToken
     jwt.verify(refreshToken,process.env.refresh_key,(err,user)=>{
           
        if(user){
          const token=  generateToken(user)

          res.status(200).send({
            token:token
          })
        }
                
     })
       
}