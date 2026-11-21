//wring schema for mongoose 
const mongoose = require('mongoose')
 const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true

    },
    lastName:{
        type:String,
        
    },
    emailId:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    }
 })