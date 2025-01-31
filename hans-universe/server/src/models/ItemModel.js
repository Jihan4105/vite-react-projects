import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  itemImage: String,
})

const ItemModel = mongoose.model("Item", itemSchema)
export default ItemModel