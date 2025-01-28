import { useState, useReducer, useEffect } from "react"

// Contexts
import { WindowContext } from "@contexts/WindowContext"
import { UserContext } from "@contexts/UserContext"
import { JSXDispatchContext } from "@contexts/JSXDispatchContext"

// Reducer
import reducerJSXHandler from "@reducer/reducerJSXHandler"

// Utils
import { queryStringToObject } from "@utils/utils"

// Services
import { getUserByFilter } from "@services/fetchUserDatas"

// Hooks
import useWindow from "@hooks/useWindow.js"

// Common Componenets
import Navbar from "@components/Navbar"
import Footer from "@components/Footer"
import Sidebar from "@components/Sidebar"

// Landing Components
import Hero from "@components/landing/Hero"
import NewsLetter from "@components/landing/NewsLetter"
import Contact from "@components/landing/Contact"

function App() {
  const [windowSize, setWindowSize] = useState({
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  })
  const [jsxContent, dispatch] = useReducer(reducerJSXHandler, {
    jsx : 
      <>
        <Hero /> 
    
        <NewsLetter /> 
        
        <Contact />
      </>
  })
  const [loading, setLoading] = useState(true)
  const [userData, setUserData] = useState({})
  const url = new URL(`${window.location.href}`)
  const queryObject = queryStringToObject(url)
  const getUser = async() => {
    let data = await getUserByFilter("id", queryObject.userId)
    setLoading(false)
    setUserData(data.userData)
  } 
  
  useEffect(() => {
    getUser()
  }, [])

  useWindow(windowSize, setWindowSize)
  
  if(loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    )
  }
  return (
    <>
      <WindowContext.Provider value={windowSize.innerWidth}>
        <JSXDispatchContext.Provider value={dispatch}>
          <UserContext.Provider value={userData}>
            <Navbar />
            
            <Sidebar />

            {jsxContent.jsx}

            <Footer />
          </UserContext.Provider>
        </JSXDispatchContext.Provider> 
      </WindowContext.Provider>
    </>
  )
}

export default App
