import Navbar from "@components/Navbar"
import Hero from "@components/landing/Hero"
import NewsLetter from "@components/landing/NewsLetter"
import Contact from "@components/landing/Contact"
import Footer from "@components/Footer"
import Sidebar from "@components/Sidebar"

import { UserContext } from "@contexts/UserContext"
import { queryStringToObject } from "@utils/utils"
import { getUserById } from "@services/fetchUserDatas"

function LandingApp() {
  const url = new URL(`${window.location.href}`)
  const queryObject = queryStringToObject(url)
  const user = getUserById(queryObject.userId)

  return (
    <>
      <UserContext.Provider value={user}>
        <Navbar />
        
        <Sidebar />
        
        <Hero />

        <NewsLetter />

        <Contact />
        
        <Footer />
      </UserContext.Provider>
    </>
  )
}

export default LandingApp
