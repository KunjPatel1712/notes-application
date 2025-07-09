const mongoose = require("mongoose")

//schema
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

//model
const userModel = mongoose.model("user",userSchema)

module.exports=userModel