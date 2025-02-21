import express from "express"
import reactionController from "../controllers/reactionController.js"

const reactionRouter = express.Router()

reactionRouter.post("/thumbsAdd", reactionController.thumbsAdd)
reactionRouter.post("/thumbsUndo", reactionController.thumbsUndo)

export default reactionRouter