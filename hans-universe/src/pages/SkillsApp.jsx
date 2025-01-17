import Navbar from "@components/Navbar"
import Header from "@components/Header"
import Footer from "@components/Footer"
import Sidebar from "@components/Sidebar"
import SkillsStacks from "@components/skills/SkillsStacks"
import Portfolio from "@components/skills/Portfolio"

import { UserContext } from "@contexts/UserContext"
import { queryStringToObject } from "@utils/utils"
import { getUserById } from "@services/fetchUserDatas"

function WorkoutApp() {
  const url = new URL(`${window.location.href}`)
  const queryObject = queryStringToObject(url)
  const user = getUserById(queryObject.userId)

  return (
    <>
      <UserContext.Provider value={user}>
        <Navbar />
        
        <Sidebar />

        <Header 
          type="skills"
        />
        
        <SkillsStacks />

        <Portfolio />
        
        <Footer />
      </UserContext.Provider>
    </>
  )
}

export default WorkoutApp
