import { useState } from "react"
import axios from "@api/api.js"
import { Link, useLocation, useNavigate } from "react-router"
import InputField from "../InputField.jsx"

import useAuth from "@hooks/useAuth.js"
import useStateEffect from "@hooks/useStateEffect.js"

export default function LoginContents() {
  const { setAuth } = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userId, setUserId] = useState("")
  const [whichIsWrong, setWhichIsWrong] = useState("")
  const [isRedirectTriggerd, setIsRedirectTriggerd] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || null

  useStateEffect(() => {
    const location = from ? `${from}?userId=${userId}` : `/app/landing?userId=${userId}`
    navigate(location, { replace: true })
  }, [isRedirectTriggerd])

  const loginBtnClicked = async(e) => {
    e.preventDefault()

    const res = await axios.post(`/sign/login`, {
      email: email,
      password: password
    }, { withCredentials: true })
    
    switch(res.data.status) {
      case "no such user" :
        setWhichIsWrong("email-wrong")
        break
      case "password wrong" :
        setWhichIsWrong("password-wrong")
        break
      case "success" :
        setUserId(res.data.userId)
        setAuth({ userId: res.data.userId, accessToken: res.data.accessToken})
        setIsRedirectTriggerd(true)
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