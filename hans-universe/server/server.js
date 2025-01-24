// import { createServer } from "http";
import express from "express"
import cors from "cors"

const app = express()
app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true,
  optionsSuccessStatus: 200,
}))

const hostname = '127.0.0.1';
const port = 3000;

// const server = createServer((req, res) => {
//   console.log(req)
// });

app.post("/user", (req,res) => {
  console.log("recived!")
  res.json({name: "this", hi: "its' me"})
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});