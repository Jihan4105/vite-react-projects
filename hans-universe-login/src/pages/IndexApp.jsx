import { useState } from "react"
import LoginContents from "../components/contents/LoginContents"
import SignUpContents from "../components/contents/SignupConents"

export default function IndexApp() {
  const [contentType, setContentType] = useState("login")
  let content

  // debugger
  switch(contentType) {
    case "login" :
      content = <LoginContents 
        contentType={contentType}
        setContentType={setContentType}
      />
      break;
    case "signup" :
      content = <SignUpContents 
        contentType={contentType}
      />
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
