import { useState, useEffect } from "react"
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
        const res = await axiosPrivate.post(`/user/getUserByFilter`, {
          filterType: "id",
          filterValue: queryObject.userId,
          signal: controller.signal
        })
        const data = res.data
        isMounted && setUserData(data.userData)
        setUserLoading(false)
      } catch(error) {
        console.log(error)
        // refreshToken이 만료되어서 튕길때, 튕기기전 위치를 기억하고, 로그인으로 튕겨나가게 함,
        // replace를 true로 설정하면 이동한후에 로그인 뒤, 브라우저 히스토리에 
        // login대신 원래 작업하던 히스토리로 replace 시킬 수 있음.
        alert("Please Loginback, your refreshToken Expired")
        navigate("/", { state: { from: location }, replace: true})
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
