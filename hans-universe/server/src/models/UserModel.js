import mongoose from "mongoose";

const userDatasSchema = new mongoose.Schema({
  userName: String,
  userProfile: String,
  email: String,
  password: String,
  notifications: [
    {
      userId: String,
      redirectURL: String
    }
  ]
})

const UserModel = mongoose.model("userdata", userDatasSchema)
export default UserModel