const mongoose = require("mongoose");
const passportLocalMongoose=require('passport-local-mongoose')

const userSchemas=new mongoose.Schema({
    userName:String,
    password:String
})

userSchemas.plugin(passportLocalMongoose)
module.exports=mongoose.model('User',userSchemas)
