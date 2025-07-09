const mongoose = require("mongoose")

//connect
async function connectToDb(req,res) {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/notes")
        console.log("connected to database")
    } catch (error) {
        console.error("error while connecting",error)
    }
}




module.exports=connectToDb