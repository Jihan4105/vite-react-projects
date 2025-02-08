import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import jwt from "jsonwebtoken"

// DB
import connectDB from "./src/db/connect.js"

// Routers
import userRouter from "./src/routes/userRoutes.js"
import signRouter from "./src/routes/signRoutes.js"
import blogRouter from "./src/routes/blogRoutes.js"
import commentRouter from "./src/routes/commentRoutes.js"

const app = express()
app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true,
  optionsSuccessStatus: 200,
}))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// 브라우저에서 주소를 치면 파일에 접근할 수 있게 해줌.
app.use("/uploads", express.static("uploads"))
app.use("/assets", express.static("src/assets"))

connectDB()

const hostname = '127.0.0.1';
const port = 3000;

// ----------------Routers------------------------------

app.use("/sign", signRouter)

app.use("/user", userRouter)

app.use("/blog", blogRouter)

app.use("/comment", commentRouter)

// ------------------------------------------------------

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});