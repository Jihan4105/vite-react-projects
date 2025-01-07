import { useState } from "react"
import LoginContents from "../components/contents/LoginContents"
import SignUpContents from "../components/contents/SignupConents"
import { OverlayContext } from "../contexts/OverlayContext"

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
        contentType={contentType}
        setContentType={setContentType}
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
