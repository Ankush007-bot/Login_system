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

// git fetch origin	Remote se latest updates download karta hai
// git merge origin/main	Un updates ko tumhare branch me laata hai
// git pull origin main	Fetch + Merge dono ek saath karta hai


//GitHub push → GitHub webhook → Jenkins job → Jenkins calls Render deploy hook → App redeploy


//jenkins/jenkins:lts

//jenkins hoted url :https://jenkins-lts-vncj.onrender.com