import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

import UserModel from "../models/UserModel.js"
import RefreshTokensModel from "../models/RefreshTokenModel.js"
import { generateAccesToken } from "../utils/utils.js"

const login = async (req,res) => {
  try {
    const fetchedData = await UserModel.find({"email": req.body.email})
    let correctUser = fetchedData[0]
    if(fetchedData.length === 0) {res.json({ status: "no such user"}) }
    else if(await bcrypt.compare(req.body.password, correctUser.password)) {
      const accessToken = generateAccesToken({ userId: correctUser._id.toJSON()})
      const refreshToken = jwt.sign({ userId: correctUser._id.toJSON()}, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "7d"})
      try {
        const createdToken = await RefreshTokensModel.create({
          userId: correctUser._id,
          refreshToken: refreshToken
        })
        res.json({ status: "success", userId: correctUser._id, accessToken: accessToken, refreshToken: refreshToken })
      } catch(error) {
        res.status(500)
        res.json({ status: "Something bad Occured", message: error.message })
      }
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

const signController = {
  login,
  signup,
}

export default signController