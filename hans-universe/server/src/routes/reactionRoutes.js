import express from "express"
import reactionController from "../controllers/reactionController.js"

const reactionRouter = express.Router()

reactionRouter.post("/thumbsAdd", reactionController.thumbsAdd)
reactionRouter.post("/thumbsUndo", reactionController.thumbsUndo)
reactionRouter.post("/likeThisBlog", reactionController.likeThisBlog)
reactionRouter.post("/hmmThisBlog", reactionController.hmmThisBlog)
reactionRouter.post("/disagreeThisBlog", reactionController.disagreeThisBlog)

export default reactionRouter