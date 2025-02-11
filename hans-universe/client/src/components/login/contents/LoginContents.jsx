import { useState, useContext } from "react"
import axios from "@api/api.js"
import { Link } from "react-router"
import InputField from "../InputField.jsx"

import AuthContext from "@/contexts/AuthContext.js"

export default function LoginContents() {
  const { setAuth } = useContext(AuthContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [whichIsWrong, setWhichIsWrong] = useState("")

  const loginBtnClicked = async(e) => {
    e.preventDefault()
    
    const hostname = import.meta.env.VITE_SERVER_HOSTNAME
    const port = import.meta.env.VITE_SERVER_PORT
  
    const res = await fetch(`http://${hostname}:${port}/sign/login`, {
      method: "POST",
      headers:  {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    const data = await res.json()

    const accessToken = data?.accessToken

    setAuth({ userId: userId, accessToken: accessToken})
    
    switch(data.status) {
      case "no such user" :
        setWhichIsWrong("email-wrong")
        break
      case "password wrong" :
        setWhichIsWrong("password-wrong")
        break
      case "success" :
        window.location.href = `/app/landing?userId=${data.userId}`
        break
    }
  }

  return(
    <div id="login-root">
      <form className="login-form login">
        <h1 className="login-title">Login</h1>
        <p className="email-label">Email</p>
        <InputField 
          contentType="login"
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
        <p className="password-label">Password <span className="login-forgot"><Link to="/forgot">Forgot password?</Link></span></p>
        <InputField
          contentType="login"
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
        <button className="login-btn" onClick={(e) => loginBtnClicked(e)}>Log in</button>
        <p className="orsignup-text">Or Sign Up Using</p>
        <div className="google-sign-up">
          <ion-icon className="google-icon" name="logo-google"></ion-icon>
        </div>
        <p className="orsignup-text">Or Sign Up Using</p>
        <span className="sign-up"><Link to="/signup">SIGN UP</Link></span>
      </form>
    </div>
  )
}