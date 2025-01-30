import express from "express"
import itemController from "../controllers/itemController.js"
import upload from "../middleware/upload.js"

const itemRouter = express.Router()

itemRouter.post("/postImage", upload.single("file"), itemController.postImage)
itemRouter.post("/postMultipleImage", upload.array("file[]"), itemController.postMultipleImage)

export default itemRouter