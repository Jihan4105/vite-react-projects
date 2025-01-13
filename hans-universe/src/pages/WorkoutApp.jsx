import Navbar from "../components/Navbar"
import WorkoutContents from "../components/workout/WorkoutContents.jsx"
import Header from "../components/Header"
import Blog from "../components/Blog"
import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"

import { WindowContext } from "../contexts/WindowContext"
import useWindow from "../hooks/useWindow.js"

import { useState } from "react"

function WorkoutApp() {
  const [windowSize, setWindowSize] = useState({
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  })

  useWindow(windowSize, setWindowSize)

  return (
    <>
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
    </>
  )
}

export default WorkoutApp
