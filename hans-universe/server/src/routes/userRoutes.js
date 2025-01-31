import express from "express"
import userController from "../controllers/userController.js"

const userRouter = express.Router()

userRouter.post("/getUserByFilter", userController.getUserByFilter)

export default userRouter