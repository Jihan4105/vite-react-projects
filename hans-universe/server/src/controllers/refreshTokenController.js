import jwt from "jsonwebtoken"
import RefreshTokensModel from "../models/RefreshTokenModel.js"
import { generateAccesToken } from "../utils/utils.js"

const getNewAccessToken = async (req, res) => {
  const cookies = req.cookies
  if(!cookies?.jwt) { return res.sendStatus(401) }
  const refreshToken = cookies.jwt;

  const fetchedUser = await RefreshTokensModel.find({ refreshToken: refreshToken })
  const correctRefreshUser = fetchedUser[0]
  if(!correctRefreshUser) { return res.sendStatus(403) }
  
  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    (error, decoded) => {
      if(error || correctRefreshUser.userId !== decoded.userId) { return res.sendStatus(403) }
      const accessToken = generateAccesToken({ userId: decoded.userId })
      res.json({ accessToken })
    }
  )
}

const refreshController = {
  getNewAccessToken
}

export default refreshController
