import express from "express"
import cors from "cors"
import bodyParser from "body-parser"

// DB
import connectDB from "./src/db/connect.js"
// import itemModel from "./src/models/Item.js"

// Routers
import userRouter from "./src/routes/user.js"
import signRouter from "./src/routes/sign.js"
import blogRouter from "./src/routes/blog.js"
import itemRouter from "./src/routes/item.js"

const app = express()
app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true,
  optionsSuccessStatus: 200,
}))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use("/uploads", express.static("uploads"))

connectDB()

const hostname = '127.0.0.1';
const port = 3000;


// ----------------Routers------------------------------

app.use("/sign", signRouter)

app.use("/user", userRouter)

app.use("/blog", blogRouter)

app.use("/item", itemRouter)


// app.post("/testdbCreate", async (req, res) => {
//   const postItem = {
//     name: "New Product",
//     description: "New description"
//   }
//   try {
//     const item = await itemModel.create(postItem)
//     res.status(200)
//     res.json(item)
//   } catch (error) {
//     res.status(500)
//     res.json({message: error.message})
//   }
// })

// app.get("/testdbREAD", async (req, res) => {
//   const items = await itemModel.find()
//   res.json(items)
// })

// app.get("/testdbREADById/:id", async (req, res) => {
//   try {
//     const { id } = req.params
//     const item = await itemModel.findById(id)
//     res.status(200).json(item)
//   } catch (error) {
//     res.status(500).json({ message: error.message })
//   }
// })

// app.put("/testdbUPDATE/:id", async (req, res) => {
//   try {
//     const { id } = req.params
//     const item = await itemModel.findByIdAndUpdate(id, {
//       name: "Cool",
//       description: "Hell"
//     })
//     // item 은 updated 된 data가 날라옴옴

//     if(!item) {
//       return res.status(404).json({message: "Item not found"})
//     }

//     const updatedItem = await itemModel.findById(id)
//     res.status(200).json(updatedItem)
//   } catch (error) {
//     res.status(500).json({ message: error.message })
//   }
// })

// app.delete("/testdbDELETE/:id", async (req, res) => {
//   try {
//     const { id } = req.params
//     const item = await itemModel.findByIdAndDelete(id)

//     console.log(item)

//     if(!item) {
//       res.status(404).json({ message: "product not found"})
//     }

//     res.status(200)
//     res.json({ message: "Product Deleted Sucessfuly"})
//   } catch (error) {
//     res.status(500)
//     res.json({ message: error.message})
//   }
// })

// FindById ===> id값으로 필드 찾는 method READ

// app.post("/api/upload", upload.single("file"), (req, res) => {
//   res.json(req.file)
// })

// ------------------------------------------------------

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});