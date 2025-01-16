import Navbar from "@components/Navbar"
import Header from "@components/Header"
import ThoughtsContent from "@components/thoughts/ThoughtsContent"
import Blog from "@components/Blog"
import Footer from "@components/Footer"
import Sidebar from "@components/Sidebar"

import { WindowContext } from "@contexts/WindowContext"

import { useState } from "react"
import useWindow from "@hooks/useWindow"

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
        type="thoughts"
      />

      <WindowContext.Provider value={windowSize.innerWidth}>  
        <ThoughtsContent />
        
        <Blog 
          type="thoughts"
          dropdownItems={["Title", "Content", "Title + Content"]}
        />
      </WindowContext.Provider>

      <Footer />
    </>
  )
}

export default WorkoutApp
