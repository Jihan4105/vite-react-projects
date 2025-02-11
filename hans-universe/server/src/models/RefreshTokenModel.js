import mongoose from "mongoose";

const refreshTokenSchema = new mongoose.Schema({
  userId: String,
  refreshToken: String,
})

const UserModel = mongoose.model("refreshtoken", userDatasSchema)
export default UserModel