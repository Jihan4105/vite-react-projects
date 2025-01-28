import { useState } from "react"
import InputField from "../InputField.jsx"
import { getUser } from "../../services/fetchData.js"
import PropTypes from "prop-types"

LoginContents.propTypes = {
  contentType: PropTypes.string.isRequired,
  setContentType: PropTypes.func.isRequired
}

export default function LoginContents({ contentType,setContentType }) {
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

function loginBtnClicked(e, email, password, setState) {
  e.preventDefault()

  const userdata = getUser(email, password)

  if(!userdata) { setState("email-wrong") } 
  else if(userdata.password != password) { setState("password-wrong")}
  else {console.log("Login Success!")}
}