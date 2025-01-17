import { useState } from "react"

import Navbar from "@components/Navbar"
import Header from "@components/Header"
import Blog from "@components/Blog"
import Footer from "@components/Footer"
import Sidebar from "@components/Sidebar"
import BooksContent from "@components/books/BooksContent"

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
      </UserContext.Provider>
    </>
  )
}

export default WorkoutApp
