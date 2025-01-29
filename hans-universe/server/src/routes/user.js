import express from "express"
import userDatas from "../datas/userDatas.js"

const userRouter = express.Router()

userRouter.post("/getUserByFilter", (req,res) => {
  const filterValue = req.body.filterValue

  let correctUserData

  for(let i = 0; i < userDatas.length; i++) {
    if(userDatas[i][req.body.filterType] == filterValue) {
      correctUserData = userDatas[i]
      break;
    }
  }
  
  res.json({ userData: correctUserData })
})

export default userRouter
