import { useContext, useState, } from "react";
import PropTypes from "prop-types";
import emailjs from "@emailjs/browser"

import InputField from "../InputField";

import { OverlayContext } from "../../contexts/OverlayContext.js";
import { getElement } from "../../utils/utils.js";
import useTimer from "../../hooks/useTimer.js";

let verifyCode

SignUpContents.propTypes = {
  contentType: PropTypes.string.isRequired,
  setContentType: PropTypes.func.isRequired
}

export default function SignUpContents({ contentType, setContentType }) {
  const { setOverlayContext } = useContext(OverlayContext) 
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [code, setCode] = useState("")
  const [password, setPassword] = useState("")
  const [passwordCheck, setPasswordCheck] = useState("")
  const [verifyStatusText, setVerifyStatus] = useState("")
  const [count, setCount] = useState(210)

  useTimer(count, setCount, [count])

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
      <div className="username-error-box">
        <p className="error-text firstname-error">error text</p>
        <p className="error-text lastname-error">error text</p>
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
          onClick={(e) => sendEmailBtnClick(e, setOverlayContext, setVerifyStatus,  setCount, {
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
        <button className="verify-btn">Verify</button>
      </div>
      <p className="error-text code-wrong">wrong code</p>
      <p className="password-label">Password</p>
      <InputField 
        contentType={contentType}
        type="password"
        state={password}
        setState={setPassword}
        placeholder="Type your password"
        iconName="lock-closed-outline"
      />
      <p className="error-text password-wrong">error text</p>
      <input 
        type="password" 
        id="signup-password-check" 
        name="signup-password-check"
        placeholder="Rewrite your password"
        spellCheck="false"
        value={passwordCheck}
        onChange={(e) => {setPasswordCheck(e.target.value)}}  
      />
      <p className="error-text password-check-wrong">error text</p>
      <button className="btn signup-btn" onClick={(e) => {signUpBtnClick(e)}}>Sign Up</button>
    </>
  )
}

function returnBtnClick(e, setContentType) {
  e.preventDefault()
  
  setContentType("login")
}

function sendEmailBtnClick(e, setOverlayContext, setVerifyStatus, setCount, templateParams) {
  e.preventDefault()

  const firstNameInput = getElement("#signup-firstname")
  const lastNameInput = getElement("#signup-lastname")
  const emailInput = getElement("#signup-email")
  const sendCodeText = getElement(".send-code-text")
  verifyCode = Math.ceil(Math.random() * 1000000)
  templateParams = {...templateParams, code: verifyCode}
  setOverlayContext(true)

  emailjs.send("service_ilc4owv", "template_if1t7pa", templateParams, "JLoXopf6tYXQJm4fk").then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
      setOverlayContext(false)
      setVerifyStatus("Verification Email Sent!")
      sendCodeText.classList.add("success-text")
      firstNameInput.disabled = true;
      lastNameInput.disabled = true;
      emailInput.disabled = true;
      setCount(c => c - 1)
    },
    (error) => {
      console.log('FAILED...', error);
      sendCodeText.classList.add("error-text")
      setVerifyStatus("FAILED...")
    },
  );
}

function signUpBtnClick(e) {
  e.preventDefault()
}