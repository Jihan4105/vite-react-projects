import { useState } from "react"
import LoginContents from "../components/login/contents/LoginContents"
import SignUpContents from "../components/login/contents/SignupConents"
import { OverlayContext } from "../contexts/OverlayContext"
import ForgotContents from "../components/login/contents/ForgotContents"

export default function IndexApp() {
  const [contentType, setContentType] = useState("login")
  const [overlayContext, setOverlayContext] = useState(false)
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
        setContentType={setContentType}
      />
      break;
    case "forgot" :
      content = <ForgotContents 
        contentType={contentType}
        setContentType={setContentType}
      />
      break;
    case "reset" :
      content = "reset"
      break;
  }
  
  return (
    <>
      <form className={`login-form ${contentType}`}>
        <OverlayContext.Provider value={{ setOverlayContext }}>
          {content}
        </OverlayContext.Provider>
      </form>
      {overlayContext && <div className="overlay"></div>}
    </>
  )
}
