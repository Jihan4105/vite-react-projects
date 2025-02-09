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

app.post("/token", (req, res) => {
  console.log(req.body)
  const refreshToken = req.body.token

  // refreshToken이 만약 없이 요청이 온다면 401에러러
  if(refreshToken === null) {
    return res.sendStatus(401)
  }

  // refreshToken을 저장해두는 곳에 현재 받은 refreshToken이 없으면 금지된 요청청
  if(!refreshTokens.includes(refreshToken)) {
    res.sendStatus(403)
  }

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    // 에러가 있으면 에러리턴턴
    if(err) {
      return res.sendStatus(403)
    }
    console.log(user)
    // accessToken을 만드는데 이 데이터에는는 다른 여러 데이터
    // 예를들어 토큰 유효기간, 만들어진 기간 등등이 있기때문에에
    // 실제로 우리가 토큰에 담을 데이터만 뽑아서 담아야한다.
    const accessToken = generateAccesToken({ id: user.id, password: user.password, userName: user.userName})
    res.json({ accessToken: accessToken })
  })
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});