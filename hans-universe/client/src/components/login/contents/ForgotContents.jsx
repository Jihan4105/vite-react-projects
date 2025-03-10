import { useState } from "react";
import { Link } from "react-router";
import emailjs from "@emailjs/browser"


import InputField from "../InputField";
import { getElement } from "@utils/utils";

import useAxiosPrivate from "@hooks/useAxiosPrivate";

export default function ForgotContents() {
  const [isOverlayEnable, setIsOverlayEnabled] = useState(false)
  const [email, setEmail] = useState("")
  const axiosPrivate = useAxiosPrivate()

  return (
    <div id="login-root">
      <form className="login-form forgot">
        <Link to="/" className="return-btn" title="return to login">
          <ion-icon name="return-down-back-outline" />
        </Link>
        <h1 className="forgot-title">Forgot Password</h1>
        <p className="forgot-subtitle">Enter your email and I&apos;ll send you  a link to reset your password</p>
        <p className="email-label">Email</p>
        <InputField 
          contentType="forgot"
          type="email"
          state={email}
          setState={setEmail}
          placeholder="Email"
          iconName="mail-outline"
        />
        <p className="email-error">something is wrong text</p>
        <button className="forgot-submit-btn" onClick={(e) => forgotSubmitClick(e, email, setIsOverlayEnabled, axiosPrivate)}>Submit</button>
      </form>
      {isOverlayEnable && <div className="overlay"></div>}
    </div>
  )
}

async function forgotSubmitClick(e, email, setIsOverlayEnabled, axiosPrivate) {
  e.preventDefault()

  const errorText = getElement(".email-error")
  const controller = new AbortController()

  const res = await axiosPrivate.post(`/user/getUserByFilter`, {
    filterType: filterType,
    filterValue: filterValue
  })
  const userData = res.data.userData

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
    setIsOverlayEnabled(true)

    emailjs.send("service_ilc4owv", "template_8rdi7ch", templateParams, "JLoXopf6tYXQJm4fk").then(
      (response) => {
        setIsOverlayEnabled(false)
        errorText.textContent = "Successfly Sended!"
        errorText.classList.remove("error-text")
        errorText.classList.add("success-text")
        
      },
      (error) => {
        setIsOverlayEnabled(false)
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