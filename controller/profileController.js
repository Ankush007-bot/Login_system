
const {verifyToken}= require('../utils')

module.exports = async (req,res,next)=>{

    res.json({
        status:'Redirect to user profile',
        user:req.user.name
    })

   
    
}