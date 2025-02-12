import express from "express"
import refreshController from "../controllers/refreshTokenController.js"

const refreshRouter = express.Router()

refreshRouter.get("/getNewAccessToken", refreshController.getNewAccessToken)

export default refreshRouter