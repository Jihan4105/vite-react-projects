import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import userDatas from "./src/data/userDatas.js"

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

app.post("/login", (req,res) => {
  const correctUser = userDatas.filter((userData) => userData.email === req.body.email)

  if(correctUser[0] === undefined) { res.json({ status: "no such user"})}
  else if(correctUser[0].password != req.body.password) { res.json({ status: "password wrong"})}
  else {  res.json({ status: "success", userId: correctUser[0].id})}
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

  console.log(correctUserData)

  res.json({ userData: correctUserData })
})


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});