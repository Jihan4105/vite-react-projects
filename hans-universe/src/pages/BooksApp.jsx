import { useState } from "react"

import Navbar from "@components/Navbar"
import Header from "@components/Header"
import Blog from "@components/Blog"
import Footer from "@components/Footer"
import Sidebar from "@components/Sidebar"
import BooksContent from "@/components/books/BooksContent"

import { WindowContext } from "@contexts/WindowContext"
import useWindow from "@hooks/useWindow.js"


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
        type="books"
      />

      <BooksContent />

      <WindowContext.Provider value={windowSize.innerWidth}>
        <Blog 
          type="books"
          dropdownItems={["Any", "Novel", "Humanities", "Philosophy"]}
        />
      </WindowContext.Provider>

      <Footer />
    </>
  )
}

export default WorkoutApp
