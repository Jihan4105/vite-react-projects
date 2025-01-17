import { useState } from "react"

import Navbar from "@components/Navbar"
import WorkoutContents from "@components/workout/WorkoutContents.jsx"
import Header from "@components/Header"
import Blog from "@components/Blog"
import Footer from "@components/Footer"
import Sidebar from "@components/Sidebar"

import { WindowContext } from "@contexts/WindowContext"
import { UserContext } from "@contexts/UserContext"
import { queryStringToObject } from "@utils/utils"
import { getUserById } from "@services/fetchUserDatas"
import useWindow from "@hooks/useWindow.js"


function WorkoutApp() {
  const [windowSize, setWindowSize] = useState({
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  })
  const url = new URL(`${window.location.href}`)
  const queryObject = queryStringToObject(url)
  const user = getUserById(queryObject.userId)


  useWindow(windowSize, setWindowSize)

  return (
    <>
      <UserContext.Provider value={user}>
        <Navbar />
        
        <Sidebar />

        <Header 
          type="workout"
        />

        <WindowContext.Provider value={windowSize.innerWidth}>  
          <WorkoutContents />
          
          <Blog 
            type="workout"
            dropdownItems={["Title", "Content", "Title + Content"]}
          />
        </WindowContext.Provider>

        <Footer />
      </UserContext.Provider>
    </>
  )
}

export default WorkoutApp
