import express from "express"
import userController from "../controllers/userController.js"

const userRouter = express.Router()

userRouter.post("/getUserByFilter", userController.getUserByFilter)
userRouter.post("/getUserByIdApp", userController.getUserByIdApp)

export default userRouter