import jwt from "jsonwebtoken"

function verifyJWT (req, res , next) {
  const authHeader = req.headers["authorization"]
  console.log(authHeader)
  if(!authHeader) {return res.sendStatus(401)}
  const token = authHeader.split(" ")[1]
  jwt.verify(
    token, 
    process.env.ACCESS_TOKEN_SECRET,
    (error, decoded) => {
      //토큰을 받은건 알겠지만 Invalid한 토큰임으로 403"FOrbidden" 에러리턴
      if(error) { return res.sendStatus(403) }
      req.userId = decoded.userId
      next()
    }
  )
}

export default verifyJWT