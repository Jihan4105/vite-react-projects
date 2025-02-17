import UserModel from "../models/UserModel.js"

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

const userController = {
  getUserByFilter,
}

export default userController

