import { useState, useEffect } from "react"
import { Outlet } from "react-router"

// Contexts
import { WindowContext } from "@contexts/WindowContext"
import { UserContext } from "@contexts/UserContext"

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

function App() {
  const [windowSize, setWindowSize] = useState({
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
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
      <div id="app-root">
        <WindowContext.Provider value={windowSize.innerWidth}>
          <UserContext.Provider value={userData}>
            <Navbar />
            
            <Sidebar />

            <Outlet />

            <Footer />
          </UserContext.Provider>
        </WindowContext.Provider>
      </div>
    </>
  )
}

export default App
