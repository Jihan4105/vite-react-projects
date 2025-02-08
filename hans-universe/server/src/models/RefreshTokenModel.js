import mongoose from "mongoose";

const refreshTokensSchema = new mongoose.Schema({
  userId: String,
  refreshToken: String,
})

const RefreshTokensModel = mongoose.model("refreshtoken", refreshTokensSchema)

export default RefreshTokensModel