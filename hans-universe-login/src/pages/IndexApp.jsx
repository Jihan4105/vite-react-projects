import { useState } from "react"
import LoginContents from "../components/LoginContents"

export default function IndexApp() {
  const [contentType, setContentType] = useState("login")
  let content

  // debugger
  switch(contentType) {
    case "login" :
      content = <LoginContents />
      break;
    case "signup" :
      content = "signup"
      break;
    case "forgot" :
      content = "forgot"
      break;
    case "reset" :
      content = "reset"
      break;
  }
  
  return (
    <form className={`login-form ${contentType}`}>
      {content}
    </form>
  )
}
