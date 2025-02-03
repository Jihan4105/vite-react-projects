import express from "express"
import commentController from "../controllers/commentController.js"

const commentRouter = express.Router()

commentRouter.post("/create", commentController.createComment)

export default commentRouter

