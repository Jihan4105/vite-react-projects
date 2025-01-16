import Navbar from "@components/Navbar"
import Header from "@components/Header"
import Footer from "@components/Footer"
import Sidebar from "@components/Sidebar"
import SkillsStacks from "@components/skills/SkillsStacks"
import Portfolio from "@components/skills/Portfolio"

function WorkoutApp() {
  return (
    <>
      <Navbar />
      
      <Sidebar />

      <Header 
        type="skills"
      />
      
      <SkillsStacks />

      <Portfolio />
      
      <Footer />
    </>
  )
}

export default WorkoutApp
