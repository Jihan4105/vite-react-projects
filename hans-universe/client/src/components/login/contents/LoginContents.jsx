import { useState } from "react"
import InputField from "../InputField.jsx"
import PropTypes from "prop-types"

LoginContents.propTypes = {
  contentType: PropTypes.string.isRequired,
  setContentType: PropTypes.func.isRequired
}

export default function LoginContents({ contentType, setContentType }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [whichIsWrong, setWhichIsWrong] = useState("")

  return(
    <>
      <h1 className="login-title">Login</h1>
      <p className="email-label">Email</p>
      <InputField 
        contentType={contentType}
        type="email"
        state={email}
        setState={setEmail}
        placeholder="Email"
        iconName="mail-outline"
      />
      <p 
        className={
          `error-text 
          email-error 
          ${whichIsWrong === "email-wrong" ? "show" : "invisible"}`}
      >
        no such user exsit
      </p>
      <p className="password-label" onClick={() => {setContentType("forgot")}}>Password <span className="login-forgot">Forgot password?</span></p>
      <InputField
        contentType={contentType}
        type="password" 
        state={password}
        setState={setPassword}
        placeholder="PWD"
        iconName="lock-closed-outline"
      /> 
      <p 
        className={
          `error-text 
          password-error
          ${whichIsWrong === "password-wrong" ? "show" : "invisible"}`}
      >
        your password is wrong
      </p>
      <button className="login-btn" onClick={(e) => loginBtnClicked(e, email, password, setWhichIsWrong)}>Log in</button>
      <p className="orsignup-text">Or Sign Up Using</p>
      <div className="google-sign-up">
        <ion-icon className="google-icon" name="logo-google"></ion-icon>
      </div>
      <p className="orsignup-text">Or Sign Up Using</p>
      <span className="sign-up" onClick={() => setContentType("signup")}>SIGN UP</span>
    </>
  )
}

async function loginBtnClicked(e, email, password, setState) {
  e.preventDefault()

  const hostname = import.meta.env.VITE_SERVER_HOSTNAME
  const port = import.meta.env.VITE_SERVER_PORT
  let fetchedData

  await fetch(`http://${hostname}:${port}/login`, {
    method: "POST",
    headers:  {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
    .then((res) => res.json())
    .then((data) => {
      fetchedData = data
    })

  switch(fetchedData.status) {
    case "no such user" :
      setState("email-wrong")
      break
    case "password wrong" :
      setState("password-wrong")
      break
    case "success" :
      window.location.href = `/src/html/app.html?userId=${fetchedData.userId}`
      break
  }
}