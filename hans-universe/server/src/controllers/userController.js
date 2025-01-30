import userDatas from "../datas/userDatas.js"

const getUserByFilter = (req,res) => {
  const filterValue = req.body.filterValue

  let correctUserData

  for(let i = 0; i < userDatas.length; i++) {
    if(userDatas[i][req.body.filterType] == filterValue) {
      correctUserData = userDatas[i]
      break;
    }
  }
  
  res.json({ userData: correctUserData })
}

const userController = {
  getUserByFilter,
}

export default userController

