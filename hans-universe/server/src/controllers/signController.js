import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

import RefreshTokensModel from "../models/RefreshTokenModel.js"
import UserModel from "../models/UserModel.js"
import { generateAccesToken } from "../utils/utils.js"

const login = async (req,res) => {
  try {
    const fetchedData = await UserModel.find({"email": req.body.email})
    let correctUser = fetchedData[0]
    if(fetchedData.length === 0) {res.json({ status: "no such user"}) }
    else if(await bcrypt.compare(req.body.password, correctUser.password)) {
      // Generating New Access Refresh Token
      const accessToken = generateAccesToken({ userId: correctUser._id.toJSON()})
      const refreshToken = jwt.sign({ userId: correctUser._id.toJSON()}, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "1d"})

      // Saving RefreshToken in MongoDB
      await RefreshTokensModel.findOneAndUpdate({ userId: correctUser._id.toString() }, { userId: correctUser._id.toString(), refreshToken: refreshToken}, { upsert: true})

      res.cookie("jwt", refreshToken, { httpOnly: true, sameSite: "None", secure: true, maxAage: 24 * 60 * 60 * 1000 })
      res.json({ status: "success", userId: correctUser._id, accessToken: accessToken })
    } 
    else { 
      res.json({ status: "password wrong"})
    }
  } catch(error) {
    res.status(500)
    res.json({ status: "Something bad Occured", message: error.message })
  }
}

const signup = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt()
    const hasedPassword = await bcrypt.hash(req.body.password, salt)
    const newUserData = {
      userName: req.body.username,
      userProfile: "http://127.0.0.1:3000/assets/defaultUserProfile.png",
      email: req.body.email,
      password: hasedPassword
    }
    const fetchedData = await UserModel.create(newUserData)
    res.status(200)
    res.json({ status: "success" })
  } catch(error) {
    res.status(500)
    res.json({ status: "error" })
  }
}

const logout = async (req, res) => {
  const cookies = req.cookies
  if(!cookies?.jwt) { return res.sendStatus(204) }
  const refreshToken = cookies.jwt;

  try {
    await RefreshTokensModel.findOneAndDelete({ refreshToken: refreshToken })
    res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true})
    res.sendStatus(204) 
  } catch(error) {
    res.status(500)
    res.json({ message: error.message })
  }
}


const signController = {
  login,
  signup,
  logout,
}

export default signController