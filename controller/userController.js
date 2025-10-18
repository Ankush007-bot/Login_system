const { generateToken, generateRefreshToken } = require("../utils")





module.exports = async (req, res, next) => {
  //console.log(req.body,'req')

  const token = generateToken(req,process.env.secret_key)
  const refreshToken=generateRefreshToken(req)

  res.status(200).send({
    'state': 'App is running succesfully',
    token:token,
    refresh_token:refreshToken,
    user:req.body
  })
 // next()
}
/**
 * Example usage in your Express route:
 * 
 * const express = require('express');
 * const userController = require('./controller/userController');
 * const app = express();
 * 
 * app.get('/status', userController);
 * 
 * app.listen(3000, () => {
 *   console.log('Server running on port 3000');
 * });
 */

//module.export=userController// module.exports = userController