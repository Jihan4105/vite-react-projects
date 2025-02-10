import { useState } from "react"
import LoginContents from "../components/contents/LoginContents"
import SignUpContents from "../components/contents/SignupConents"
import OverlayContext from "../contexts/OverlayContext"
import ForgotContents from "../components/contents/ForgotContents"

export default function IndexApp() {
  const [contentType, setContentType] = useState("login")
  const [overlayContext, setOverlayContext] = useState(false)
  let content

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
