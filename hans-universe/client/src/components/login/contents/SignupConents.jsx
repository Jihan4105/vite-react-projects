import { useContext, useRef, useState, } from "react";
import PropTypes from "prop-types";
import emailjs from "@emailjs/browser"

import { OverlayContext } from "../../../contexts/OverlayContext.js";
import { getElement } from "../../../utils/utils.js";
import useTimer from "../../../hooks/useTimer.js";

let verifyCode
let nameRegex = /^[a-z ,.'-]+$/i
let passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/
let emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
let codeRegex = /^[0-9]{6}$/

let checkInputsStatus = {
  firstname: false,
  lastname: false,
  email: false,
  verfied: false,
  password: false,
  passwordCheck: false
}

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

  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

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
            onChange={(e) => {nameChangeHandler(e.target.value, "firstname", setFirstName)}}  
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
          onChange={(e) => {nameChangeHandler(e.target.value, "lastname", setLastName)}}  
        />
        <p className="error-text firstname-error">Invalid name</p>
        <p className="error-text lastname-error">Invalid name</p>
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
            onChange={(e) => {emailChangeHandler(e.target.parentElement.nextElementSibling, e.target.value, setEmail, setVerifyStatusText)}}  
          />
        </div>
        <button 
          className="send-code-btn disabled" 
          onClick={(e) => {sendEmailBtnClick(e, setOverlayContext, setVerifyStatusText,  setCount, {
            firstName: firstName,
            lastName: lastName, 
            email: email
          })}}
        >
          <div className="button-overlay" onClick={(e) => {e.preventDefault(); e.stopPropagation()}}></div>
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
          onChange={(e) => {codeChangeHandler(e.target.value, setCode)}}  
          disabled
        />
        <div className="remain-time">
          {parseInt(count / 60)} : {(count % 60).toString().padStart(2, "0")}
        </div>
        <button 
          className="verify-btn disabled" 
          onClick={(e) => verifyBtnClick(e, code, setVerifyStatus, count)}
        >
          <div className="button-overlay" onClick={(e) => {e.preventDefault(); e.stopPropagation()}}></div>
          Verify
        </button>
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
          onChange={(e) => {pwdChangeHandler(e.target.parentElement, e.target.value, setPassword, passwordCheck)}}
        />
        <div 
          className="visible-password-btn" 
          onMouseDown={(e) => {
            e.target.parentElement.previousElementSibling.type = "text"
            setIsPasswordVisible(true)
          }}
          onMouseUp={(e) => {
            e.target.parentElement.previousElementSibling.type = "password"
            setIsPasswordVisible(false)
          }}
        >
          {isPasswordVisible ? 
            <ion-icon name="eye" /> 
            :
            <ion-icon name="eye-outline" /> 
          }
        </div>
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
      {password !== passwordCheck && 
        <p className="error-text password-check-wrong">Doesn&apos;t match</p>
      }
      <button className="btn signup-btn" onClick={(e) => {signUpBtnClick(e, setContentType)}}>Sign Up</button>
    </>
  )
}

function returnBtnClick(e, setContentType) {
  e.preventDefault()
  setContentType("login")
}

function nameChangeHandler(value, nameType, setState) {
  const nameErrorText = getElement(`.${nameType}-error`)
  const buttonElement = getElement(".send-code-btn")

  if(!nameRegex.test(value)) {
    checkInputsStatus[nameType] = false  
    nameErrorText.style.visibility = "visible"
  } else {
    checkInputsStatus[nameType] = true
    nameErrorText.style.visibility = "hidden"
  }

  if(checkInputsStatus.email && checkInputsStatus.firstname && checkInputsStatus.lastname) {
    buttonElement.classList.remove("disabled")
  } else {
    buttonElement.classList.add("disabled")
  }
  
  setState(value)
}

function emailChangeHandler(buttonElement, value, setState, setVerifyStatusText) {
  const sendCodeText = getElement(".send-code-text")

  if(!emailRegex.test(value)) {
    checkInputsStatus.email = false
    buttonElement.classList.add("disabled")
    sendCodeText.classList.add("error-text")
    setVerifyStatusText("Invalid email")
  } else {
    checkInputsStatus.email = true
    if(checkInputsStatus.firstname === true && checkInputsStatus.lastname === true) {
      buttonElement.classList.remove("disabled")
    }
    sendCodeText.classList.remove("error-text")
    setVerifyStatusText("")
  }

  setState(value)
}

function sendEmailBtnClick(e, setOverlayContext, setVerifyStatusText, setCount, templateParams) {
  e.preventDefault()

  const verifyBtn = getElement(".verify-btn")
  const sendCodeText = getElement(".send-code-text")
  const codeInput = getElement("#signup-code")
  verifyCode = Math.ceil(Math.random() * 1000000)
  templateParams = {...templateParams, code: verifyCode}
  setOverlayContext(true)
  sendCodeText.classList.remove("error-text", "success-text")
  setVerifyStatusText("...Sending")
  sendCodeText.classList.remove("success-text")

  emailjs.send("service_ilc4owv", "template_if1t7pa", templateParams, "JLoXopf6tYXQJm4fk").then(
    (response) => {
      setOverlayContext(false)
      setVerifyStatusText("Verification Email Sent!")
      sendCodeText.classList.add("success-text")
      setCount(210)
      verifyBtn.classList.remove('disabled')
      codeInput.disabled = false
    },
    (error) => {
      setOverlayContext(false)
      sendCodeText.classList.add("error-text")
      setVerifyStatusText("FAILED...")
    },
  );
}

function codeChangeHandler(value, setCode) {
  const codeText = getElement(".code-text")

  if(!codeRegex.test(value)) {
    codeText.classList.add("show")
    codeText.textContent = "Invalide Code"
  } else {
    codeText.classList.remove("show")
    codeText.textContent = ""
  }

  setCode(value)
}

function verifyBtnClick(e, code, setVerifyStatus, countState) {
  e.preventDefault()

  const firstNameInput = getElement("#signup-firstname")
  const lastNameInput = getElement("#signup-lastname")
  const emailInput = getElement("#signup-email")
  const sendCodeBtn = getElement(".send-code-btn")
  const codeInput = getElement("#signup-code")
  const verifyBtn = getElement(".verify-btn")
  const codeText = getElement(".code-text")

  if( parseInt(code) === verifyCode && countState !== 0) {
    firstNameInput.disabled = true
    lastNameInput.disabled = true
    emailInput.disabled = true
    sendCodeBtn.classList.add("disabled")
    codeInput.disabled = true
    verifyBtn.classList.add('disabled')

    codeText.textContent = "Verified!"
    codeText.classList.add("show")
    codeText.classList.add("success-text")
    checkInputsStatus.verfied = true
    setVerifyStatus("verified")
  } else {
    if(countState === 0) {
      codeText.textContent = "Times up"
    } else {
      codeText.textContent = "Wrong code"
    }
    codeText.classList.add("show")
    codeText.classList.add("error-text")
  }
}

function pwdChangeHandler(inputBoxElement, value, setPassword, passwordCheck) {
  const passwordErrorText = getElement('.password-wrong')

  if(value !== passwordCheck) {
    checkInputsStatus.passwordCheck = false
  } else {
    checkInputsStatus.passwordCheck = true
  }

  if(!passwordRegex.test(value)) {
    passwordErrorText.style.display = "block"
    inputBoxElement.style.marginBottom = "0"
    passwordErrorText.style.marginBottom= "1rem"
    checkInputsStatus.password = false
  } else {
    passwordErrorText.style.display = "none"
    inputBoxElement.style.marginBottom = "1rem"
    checkInputsStatus.password = true
  }
  
  setPassword(value)
}

function pwdCheckChangeHandler(password, value, setPasswordCheck)  {
  
  if(value === password) {
    checkInputsStatus.passwordCheck = true
  } else {
    checkInputsStatus.passwordCheck = false
  }
  
  setPasswordCheck(value)
}

async function signUpBtnClick(e, setContentType) {
  e.preventDefault()

  let isEveryFieldFilled = true

  for(const[key, value] of Object.entries(checkInputsStatus)) {
    if(value === false) {
      switch(key) {
        case "firstname" :
          getElement(`#signup-${key}`).focus()
          isEveryFieldFilled = false
          break
        case "lastname" :
          getElement(`#signup-${key}`).focus()
          isEveryFieldFilled = false
          break
        case "email" :
          getElement(`#signup-${key}`).focus()
          isEveryFieldFilled = false
          break
        case "verfied" :
          getElement("#signup-code").focus()
          isEveryFieldFilled = false
          break
        case "password" :
          getElement(`#signup-${key}`).focus()
          isEveryFieldFilled = false
          break
        case "passwordCheck" :
          getElement("#signup-password-check").focus()
          isEveryFieldFilled = false
          break
      }
      break
    }
  }

  if(isEveryFieldFilled === true) {
    const firstname = getElement("#signup-firstname").value
    const lastname = getElement("#signup-lastname").value
    const email = getElement("#signup-email").value
    const password = getElement("#signup-password").value
    const hostname = import.meta.env.VITE_SERVER_HOSTNAME
    const port = import.meta.env.VITE_SERVER_PORT

    const res = await fetch(`http://${hostname}:${port}/sign/signup`, {
      method: "POST",
      headers:  {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: firstname + " " + lastname, 
        email: email,
        password: password
      })
    })
    const data = await res.json()

    switch(data.status) {
      case "success" :
        alert("Succesfly SignUp!")
        setContentType("login")
        break;
      case "error" :
        alert("Something exection occured...")
        break;
    }
  }
}