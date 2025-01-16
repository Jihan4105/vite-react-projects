import Navbar from "@components/Navbar"
import Header from "@components/Header"
import Footer from "@components/Footer"
import Sidebar from "@components/Sidebar"
import SkillsStacks from "@components/skills/SkillsStacks"

function WorkoutApp() {
  return (
    <>
      <Navbar />
      
      <Sidebar />

      <Header 
        type="skills"
      />
      
      <SkillsStacks />
      
      <Footer />
    </>
  )
}

export default WorkoutApp
