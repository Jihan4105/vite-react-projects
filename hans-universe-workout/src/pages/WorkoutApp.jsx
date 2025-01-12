import Navbar from "../components/Navbar"
import WorkoutContents from "../components/WorkoutContents"
import Header from "../components/Header"
import Blog from "../components/Blog"
import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"

import { WindowContext } from "../contexts/WindowContext"

import { useState, useEffect } from "react"

function WorkoutApp() {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth)

    const detectSize = () => {
      setwindowWidth(window.innerWidth)
    }

    useEffect(() => {
      window.addEventListener("resize", detectSize)
      return () => {
        window.removeEventListener("resize", detectSize)
      }
    }, [windowWidth])

  return (
    <>
      <Navbar />
      
      <Sidebar />

      <Header 
        type="workout"
      />

      <WindowContext.Provider value={windowWidth}>  
        <WorkoutContents />
        
        <Blog 
          type="workout"
          dropdownItems={["Title", "Content", "Title + Content"]}
        />
      </WindowContext.Provider>

      <Footer />
    </>
  )
}

export default WorkoutApp
