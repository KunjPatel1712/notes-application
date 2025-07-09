const express  = require("express")
const userController = require("../Controllers/user.controller")

const userRouter = express.Router()

userRouter.get("/test",userController.test)

userRouter.post("/register",userController.register)

userRouter.post("/signin",userController.signin)

module.exports=userRouter