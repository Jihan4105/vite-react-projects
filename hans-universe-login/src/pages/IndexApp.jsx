import { useState, useRef } from "react"
import InputField from "../components/InputField.jsx"
import userDatas from "../data/userData.js"
const usersData =  useRef(userDatas)

export default function IndexApp() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [whichIsWrong, setWhichIsWrong] = useState("")

  return (
    <form className="login-form">
      <h1 className="login-title">Login</h1>
      <p className="email-label">Email</p>
      <InputField 
        state={email}
        setState={setEmail}
        placeholder="Email"
        iconName="mail-outline"
      />
      <p className="error-text email-error">something is wrong text</p>
      <p className="password-label">Password <span className="login-forgot">Forgot password?</span></p>
      <InputField 
        state={password}
        setState={setPassword}
        placeholder="PWD"
        iconName="lock-closed-outline"
      /> 
      <p className="error-text password-error">something is wrong text</p>
      <button className="login-btn" onClick={()=> loginBtnClicked()}>Log in</button>
      <p className="orsignup-text">Or Sign Up Using</p>
      <div className="google-sign-up">
        <ion-icon className="google-icon" name="logo-google"></ion-icon>
      </div>
      <p className="orsignup-text">Or Sign Up Using</p>
      <span className="sign-up">SIGN UP</span>
    </form>
  )
}

function loginBtnClicked() {
  
}