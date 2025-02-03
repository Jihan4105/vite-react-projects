import { useContext, useState, } from "react";
import PropTypes from "prop-types";
import emailjs from "@emailjs/browser"

import { OverlayContext } from "../../contexts/OverlayContext.js";
import { getElement } from "../../utils/utils.js";
import useTimer from "../../hooks/useTimer.js";

let verifyCode
let passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/

SignUpContents.propTypes = {
  setContentType: PropTypes.func.isRequired
}

export default function SignUpContents({ setContentType }) {
  const { setOverlayContext } = useContext(OverlayContext) 
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [code, setCode] = useState("")
  const [password, setPassword] = useState("")
  const [passwordCheck, setPasswordCheck] = useState("")
  const [verifyStatusText, setVerifyStatusText] = useState("")
  const [verifyStatus, setVerifyStatus] = useState("unVerified")
  const [count, setCount] = useState(0)

  useTimer(count, setCount, verifyStatus)

  return (
    <>
      <button className="return-btn" title="return to login" onClick={(e) => {returnBtnClick(e, setContentType)}}><ion-icon name="return-down-back-outline" /></button>
      <h1 className="signup-title">Sign Up</h1>
      <p className="username-label">User Name</p>
      <div className="username-group">
        <div className="firstname-input-box">
          <label htmlFor="signup-firstname"><ion-icon name="person-outline"/></label>
          <input 
            type="text" 
            id="signup-firstname" 
            name="signup-firstname"
            placeholder="firstname"
            spellCheck="false"
            autoComplete="off"
            value={firstName}
            onChange={(e) => {setFirstName(e.target.value)}}  
          />
        </div>
        <input 
          type="text" 
          id="signup-lastname" 
          name="signup-lastname"
          placeholder="lastname"
          spellCheck="false"
          autoComplete="off"
          value={lastName}
          onChange={(e) => {setLastName(e.target.value)}}  
        />
      </div>
      <p className="email-label">Email</p>
      <div className="email-input-group">
        <div className="email-input-box">
          <label htmlFor="signup-email"><ion-icon name="mail-outline" /></label>
          <input 
            type="text" 
            id="signup-email" 
            name="signup-email"
            placeholder="Type your Email"
            spellCheck="false"
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}  
          />
        </div>
        <button 
          className="send-code-btn" 
          onClick={(e) => sendEmailBtnClick(e, setOverlayContext, setVerifyStatusText,  setCount, {
            firstName: firstName,
            lastName: lastName, 
            email: email
          })}
        >
          Send Code
        </button>
      </div>
      <p className="send-code-text">{verifyStatusText}</p>
      <div className="code-box">
        <input 
          type="text" 
          id="signup-code" 
          name="signup-code"
          placeholder="Code"
          spellCheck="false"
          autoComplete="off"
          maxLength={6}
          value={code}
          onChange={(e) => {setCode(e.target.value)}}  
        />
        <div className="remain-time">
          {parseInt(count / 60)} : {(count % 60).toString().padStart(2, "0")}
        </div>
        <button className="verify-btn" onClick={(e) => verifyBtnClick(e, code, setVerifyStatus)}>Verify</button>
      </div>
      <p className="code-text">wrong code</p>
      <p className="password-label">Password</p>
      <div className="input-box">
        <label htmlFor="signup-password"><ion-icon name="lock-closed-outline"></ion-icon></label>
        <input 
          type="password" 
          id="signup-password" 
          name="signup-password" 
          placeholder="Type your password" 
          spellCheck="false" 
          value={password}
          onChange={(e) => {pwdChangeHandler(e.target.value, setPassword)}}
        />
      </div>
      <p className="error-text password-wrong">Chracter, Number include 8 letters up</p>
      <input 
        type="password" 
        id="signup-password-check" 
        name="signup-password-check"
        placeholder="Rewrite your password"
        spellCheck="false"
        value={passwordCheck}
        onChange={(e) => {pwdCheckChangeHandler(password, e.target.value, setPasswordCheck)}}  
      />
      <p className="error-text password-check-wrong">Doesn&apos;t match</p>
      <button className="btn signup-btn" onClick={(e) => {signUpBtnClick(e)}}>Sign Up</button>
    </>
  )
}

function pwdChangeHandler(value, setPassword) {
  const passwordErrorText = getElement('.password-wrong')

  if(!passwordRegex.test(value)) {
    passwordErrorText.style.visibility = "visible"
  } else {
    passwordErrorText.style.visibility = "hidden"
  }

  setPassword(value)
}

function pwdCheckChangeHandler(password, value, setPasswordCheck)  {
  const checkErrorText = getElement(".password-check-wrong")

  if(value === password) {
    checkErrorText.style.visibility = "hidden"
  } else {
    checkErrorText.style.visibility = "visible"
  }

  setPasswordCheck(value)
}

function returnBtnClick(e, setContentType) {
  e.preventDefault()
  setContentType("login")
}

function sendEmailBtnClick(e, setOverlayContext, setVerifyStatusText, setCount, templateParams) {
  e.preventDefault()

  const sendCodeText = getElement(".send-code-text")
  verifyCode = Math.ceil(Math.random() * 1000000)
  templateParams = {...templateParams, code: verifyCode}
  setOverlayContext(true)
  setVerifyStatusText("...Sending")
  sendCodeText.classList.remove("success-text")

  emailjs.send("service_ilc4owv", "template_if1t7pa", templateParams, "JLoXopf6tYXQJm4fk").then(
    () => {
      setOverlayContext(false)
      setVerifyStatusText("Verification Email Sent!")
      sendCodeText.classList.add("success-text")
      setCount(210)
    },
    () => {
      sendCodeText.classList.add("error-text")
      setVerifyStatusText("FAILED...")
    },
  );
}

function verifyBtnClick(e, code, setVerifyStatus) {
  e.preventDefault()

  const firstNameInput = getElement("#signup-firstname")
  const lastNameInput = getElement("#signup-lastname")
  const emailInput = getElement("#signup-email")
  const sendCodeBtn = getElement(".send-code-btn")
  const codeInput = getElement("#signup-code")
  const verifyBtn = getElement(".verify-btn")
  const codeText = getElement(".code-text")

  if( parseInt(code) === verifyCode) {
    firstNameInput.disabled = true
    lastNameInput.disabled = true
    emailInput.disabled = true
    sendCodeBtn.disabled = true
    codeInput.disabled = true
    verifyBtn.disabled = true

    codeText.textContent = "Verified!"
    codeText.classList.add("show")
    codeText.classList.add("success-text")
    setVerifyStatus("verified")
  } else {
    codeText.textContent = "Wrong code"
    codeText.classList.add("show")
    codeText.classList.add("error-text")
  }
}

function signUpBtnClick(e) {
  e.preventDefault()
}