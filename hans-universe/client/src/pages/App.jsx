import { useState, useEffect } from "react"
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
  const url = new URL(`${window.location.href}`)
  const queryObject = queryStringToObject(url)
  
  useEffect(() => {
    let isMounted = true
    // request를 캔슬시킬 수 있음. 
    const controller = new AbortController()

    const getUser = async() => {
      try {
        const res = await axiosPrivate.post(`/user/getUserByFilter`, {
          filterType: "id",
          filterValue: queryObject.userId,
          signal: controller.signal
        })
        const data = res.data
        console.log(data)
        isMounted && setUserData(data.userData)
        setUserLoading(false)
      } catch(error) {
        console.log(error) 
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
