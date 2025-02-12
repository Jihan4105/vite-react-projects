import express from "express"
import signController from "../controllers/signController.js"

const signRouter = express.Router()

signRouter.post("/login", signController.login)
signRouter.post("/signup", signController.signup)
signRouter.get("/logout", signController.logout)

export default signRouter