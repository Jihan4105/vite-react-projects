import UserModel from "../models/UserModel.js"
import RefreshTokenModel from "../models/RefreshTokenModel.js"

const getUserByFilter = async (req,res) => {
  const filterType = req.body.filterType === "id" ? "_id" : req.body.filterType
  const filterValue = req.body.filterValue
  let filterObject = {}
  filterObject[filterType] = filterValue

  try{
    const fetchedData = await UserModel.find(filterObject)
    const correctUserData = fetchedData[0]

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

const getUserByIdApp = async (req, res) => {
  const { userId } = req.body

  try {
    const refreshToken = await RefreshTokenModel.find({ userId: userId })

    if(!refreshToken[0]) {
      res.sendStatus(401)
    } else {
      const userData = await UserModel.findById(userId)

      res.status(200)
      res.json(userData)
    }
  } catch(error) {
    res.status(500)
    res.json({ message: error.message })
  }
}

const userController = {
  getUserByFilter,
  getUserByIdApp
}

export default userController

