import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: String,
  description: String
})

const itemModel = mongoose.model("Item", itemSchema)
export default itemModel