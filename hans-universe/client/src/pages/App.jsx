import { useState, useEffect, useContext } from "react"
import { useNavigate, useLocation } from "react-router"
import { Outlet } from "react-router"

// Contexts
import WindowContext from "@contexts/WindowContext"
import UserContext from "@contexts/UserContext"

// Utils
import { queryStringToObject } from "@utils/utils"

// Hooks
import useWindow from "@hooks/useWindow.js"
import useAxiosPrivate from "@/hooks/useAxiosPrivate"

// Common Componenets
import Navbar from "@components/Navbar"
import Footer from "@components/Footer"
import Sidebar from "@components/Sidebar"

function App() {
  const [windowSize, setWindowSize] = useState({
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  })
  const [userLoading, setUserLoading] = useState(true)
  const [userData, setUserData] = useState({})
  const axiosPrivate = useAxiosPrivate()
  const navigate = useNavigate()
  const location = useLocation()
  const url = new URL(`${window.location.href}`)
  const queryObject = queryStringToObject(url)
  
  useEffect(() => {
    let isMounted = true
    const controller = new AbortController()

    const getUser = async() => {
      try {
        const res = await axiosPrivate.post(`/user/getUserByIdApp`, {
          userId: queryObject.userId,
          signal: controller.signal
        })
        const data = res.data
        isMounted && setUserData(data)
        setUserLoading(false)
      } catch(error) {
        if(error.status === 401) {
          alert("UnAhtorized Access Please Login back")
          navigate("/", { replace: true })
        } 
        else if(error.status === 403) {
          alert("Please Loginback, your refreshToken Expired")
          navigate("/", { state: { from: location }, replace: true})
        }
      } 
    } 

    getUser()

    return () => {
      isMounted = false
      controller.abort()
    }
  }, [])

  useWindow(windowSize, setWindowSize)
  
  if(userLoading) {
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
