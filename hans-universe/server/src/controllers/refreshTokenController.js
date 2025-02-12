import jwt from "jsonwebtoken"
import RefreshTokensModel from "../models/RefreshTokenModel.js"
import { generateAccesToken } from "../utils/utils.js"

const getNewAccessToken = (req, res) => {
  const cookies = req.cookies
  if(!cookies?.jwt) { return res.sendStatus(401) }
  const refreshToken = cookies.jwt;

  const fetchedUser = RefreshTokensModel.find({ refreshToken: refreshToken })
  if(!fetchedUser) { return res.sendStatus(403) }
  
  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    (error, decoded) => {
      if(error || fetchedUser.userId !== decoded.userId) { res.sendStatus(403) }
      const accessToken = generateAccesToken({ userId: decoded.userId })
      res.json({ accessToken })
    }
  )
}

const refreshController = {
  getNewAccessToken
}

export default refreshController
