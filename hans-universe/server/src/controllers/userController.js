// import userDatas from "../datas/userDatas.js"
import UserModel from "../models/UserModel.js"

const getUserByFilter = async (req,res) => {
  const filterValue = req.body.filterValue

  try{
    let correctUserData
    const userDatas = await UserModel.find()

    console.log(userDatas)

    for(let i = 0; i < userDatas.length; i++) {
      if(userDatas[i][req.body.filterType] == filterValue) {
        correctUserData = userDatas[i]
        break;
      }
    }
    
    if(!correctUserData) {
      res.status(404)
      res.json({ message: "No Correct User Found"})
    }

    res.status(200)
    res.json({ userData: correctUserData })
  } catch(error) {
    res.status(500)
    res.json({ message: error.message })
  }
  
}

const userController = {
  getUserByFilter,
}

export default userController

