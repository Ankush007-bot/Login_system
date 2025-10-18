const express = require('express')
const profileController= require('../controller/profileController')
const verifyToken=require('../middleware/verify')

const router =express.Router()

router.post('/',verifyToken,profileController)

module.exports= router
