import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import userDatas from "./src/datas/userDatas.js"

const app = express()
app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true,
  optionsSuccessStatus: 200,
}))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const hostname = '127.0.0.1';
const port = 3000;
let userId = 4;

app.post("/login", (req,res) => {
  const correctUser = userDatas.filter((userData) => userData.email === req.body.email)

  if(correctUser[0] === undefined) { res.json({ status: "no such user"})}
  else if(correctUser[0].password != req.body.password) { res.json({ status: "password wrong"})}
  else { res.json({ status: "success", userId: correctUser[0].id})}
})

app.post("/getUserById", (req,res) => {
  const userId = req.body.userId
  let correctUserData

  for(let i = 0; i < userDatas.length; i++) {
    if(userDatas[i].id == userId) {
      correctUserData = userDatas[i]
      break;
    }
  }

  res.json({ userData: correctUserData })
})

app.post("/signup", (req, res) => {
  const newUserData = {
    id: Math.random().toString(36).substring(2,11).toUpperCase(),
    username: req.body.username,
    userProfile: "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=",
    email: req.body.email,
    password: req.body.password
  }
  console.log(userDatas)
  try {
    userDatas.push(newUserData)
    console.log(userDatas)
    res.json({ status: "success" })
  } catch(error) {
    console.log(error.message)
    res.json({ status: "error" })
  }
})


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});