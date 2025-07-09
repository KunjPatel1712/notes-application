const express = require("express")
const connectToDb = require("./db")
const userRouter = require("./Router/user.router")
const cookieParser = require('cookie-parser');
const noteRouter = require("./Router/note.router");
const cors = require("cors")

const app = express()
app.use(cookieParser());
app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use("/api/user",userRouter)
app.use("/api/note",noteRouter)




app.listen(3000,async()=>{
    try {
        await connectToDb()
    } catch (error) {
        console.log("error while connecting database")
    }
    console.log("server is running>>>>>>>>")
})


