import { useState, useContext } from "react";
import emailjs from "@emailjs/browser"

import { OverlayContext } from "@contexts/OverlayContext";
import { getUserByFilter } from "@services/fetchUserDatas";
import InputField from "../InputField";
import PropTypes from "prop-types";
import { getElement } from "@utils/utils";


ForgotContents.propTypes = {
  contentType: PropTypes.string.isRequired,
  setContentType: PropTypes.func.isRequired
}

export default function ForgotContents({ contentType, setContentType }) {
  const { setOverlayContext } = useContext(OverlayContext) 
  const [email, setEmail] = useState("")

  return (
    <>
      <button className="return-btn" title="return to login" onClick={(e) => {returnBtnClick(e, setContentType)}}><ion-icon name="return-down-back-outline" /></button>
      <h1 className="forgot-title">Forgot Password</h1>
      <p className="forgot-subtitle">Enter your email and I&apos;ll send you  a link to reset your password</p>
      <p className="email-label">Email</p>
      <InputField 
        contentType={contentType}
        type="email"
        state={email}
        setState={setEmail}
        placeholder="Email"
        iconName="mail-outline"
      />
      <p className="email-error">something is wrong text</p>
      <button className="forgot-submit-btn" onClick={(e) => forgotSubmitClick(e, email, setOverlayContext)}>Submit</button>
    </>
  )
}

function returnBtnClick(e, setContentType) {
  e.preventDefault()
  setContentType("login")
}

async function forgotSubmitClick(e, email, setOverlayContext) {
  e.preventDefault()

  const errorText = getElement(".email-error")
  const data = await getUserByFilter("email", email)
  const userData = data.userData

  if(userData) {
    const userPasswordLength = userData.password.length

    const templateParams = {
      from_name: "Han's Universe",
      userName: userData.userName,
      email: userData.email,
      message: `Your Pwd is ${(userData.password.slice(0, userPasswordLength-3)).padEnd(userPasswordLength, "*")}`
    }

    errorText.style.visibility = "visible"
    errorText.textContent = "...Sending"
    errorText.classList.remove("error-text")
    errorText.classList.remove("success-text")
    setOverlayContext(true)

    emailjs.send("service_ilc4owv", "template_8rdi7ch", templateParams, "JLoXopf6tYXQJm4fk").then(
      (response) => {
        setOverlayContext(false)
        errorText.textContent = "Successfly Sended!"
        errorText.classList.remove("error-text")
        errorText.classList.add("success-text")
        
      },
      (error) => {
        setOverlayContext(false)
        errorText.textContent = "Something Went Wrong..."
        errorText.classList.add("error-text")
        errorText.classList.remove("success-text")
      },
    );
  } else {
    errorText.style.visibility = "visible"
    errorText.textContent = "No such user..."
    errorText.classList.add("error-text")
    errorText.classList.remove("success-text")
  }
}