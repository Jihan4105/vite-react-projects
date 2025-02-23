import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"

// DB
import connectDB from "./src/db/connect.js"

// Routers
import userRouter from "./src/routes/userRoutes.js"
import signRouter from "./src/routes/signRoutes.js"
import blogRouter from "./src/routes/blogRoutes.js"
import commentRouter from "./src/routes/commentRoutes.js"
import refreshRouter from "./src/routes/refreshRoutes.js"
import reactionRouter from "./src/routes/reactionRoutes.js"

import verifyJWT from "./src/middleware/verifyJWT.js"

const app = express()

app.use(cookieParser())
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:4173"], 
  credentials: true,
  optionsSuccessStatus: 200,
}))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use("/uploads", express.static("uploads"))
app.use("/assets", express.static("src/assets"))

dotenv.config()
connectDB()

const hostname = '127.0.0.1';
const port = 3000;

// ----------------Routers------------------------------


app.use("/sign", signRouter)

app.use("/refresh", refreshRouter)

// Under need to Authorized
app.use(verifyJWT)

app.use("/user", userRouter)

app.use("/blog", blogRouter)

app.use("/comment", commentRouter)

app.use("/reaction", reactionRouter)

// ------------------------------------------------------

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});