import express from "express"
import blogController from "../controllers/blogController.js"

const blogRouter = express.Router()

blogRouter.post("/getBlogDatas", blogController.getBlogDatas)
blogRouter.post("/getBlogItem", blogController.getBlogItem)

export default blogRouter