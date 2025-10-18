const express= require('express')

const router= express.Router()
const tokenController= require('../controller/tokenController')


router.post('/',tokenController)

module.exports= router