import mongoose from "mongoose"

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(
      `mongodb+srv://${process.env.DB_ADMIN}:${process.env.DB_PASSWORD}@hans-universe.zlwqx.mongodb.net/HUV?retryWrites=true&w=majority&appName=Hans-Universe`
    )
    console.log(`MongoDB Connected: ${connect.connection.host}`)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

export default connectDB