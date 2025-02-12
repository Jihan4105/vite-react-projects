import mongoose from "mongoose";

const refreshTokenSchema = new mongoose.Schema({
  userId: String,
  refreshToken: String,
})

const RefreshTokensModel = mongoose.model("refreshtoken", refreshTokenSchema)
export default RefreshTokensModel