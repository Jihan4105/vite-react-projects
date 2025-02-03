import UserModel from "../models/UserModel.js"

const login = async (req,res) => {

  try {
    const fetchedData = await UserModel.find({"email": req.body.email})
  
    const correctUser = fetchedData[0]
    res.status(200)
    if(fetchedData.length === 0) {res.json({ status: "no such user"}) }
    else if(correctUser.password != req.body.password) { res.json({ status: "password wrong"})} 
    else { res.json({ status: "success", userId: correctUser.id })}
  } catch(error) {
    res.status(500)
    res.json({ status: "Something bad Occured", message: error.message})
  }

}

const signup = async (req, res) => {
  const newUserData = {
    userName: req.body.username,
    userProfile: "http://127.0.0.1:3000/assets/defaultUserProfile.png",
    email: req.body.email,
    password: req.body.password
  }
  try {
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