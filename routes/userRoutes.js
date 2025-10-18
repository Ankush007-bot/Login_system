const express= require("express")
const userController= require("../controller/userController")

const generateToken=require("../utils")

const router=express.Router()

// process.env.secret_key

router.post("/home", userController)
module.exports=router