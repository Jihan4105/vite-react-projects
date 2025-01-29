import mongoose from "mongoose"

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb+srv://jihan4105:sam990604@hans-universe.zlwqx.mongodb.net/testdb?retryWrites=true&w=majority&appName=Hans-Universe"
    )
    console.log(`MongoDB Connected: ${connect.connection.host}`)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

export default connectDB