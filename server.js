
const express = require("express")
const app = express()
const port =5000
const home =require('./routes/userRoutes')
const profile= require('./routes/profileRoutes')
const dotenv = require("dotenv")
app.use(express.json());

const generateToken = require('./routes/tokenRoutes')


dotenv.config()
app.use('/', home)
app.use('/profile',profile)
app.use('/generateToken',generateToken)



// Import required modules
const fs = require('fs');
const csv = require('csv-parser');
const { normalize } = require("path")
//const filePath = require('./employees.csv')  

// Path to your CSV file



//  Find the first non-repeating character in a string
//     "aabbcde" !’ "c"



// Capitalize the first letter of each word in a string
//  "hello world" !’ "Hello World"
  
  
// Query to fetch only name and email fields, excluding _id.
       

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`)
})






