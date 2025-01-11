import Navbar from "../components/Navbar"
import WorkoutContents from "../components/WorkoutContents"
import Header from "../components/Header"
import Blog from "../components/Blog"
import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"

function WorkoutApp() {
  return (
    <>
      <Navbar />
      
      <Sidebar />

      <Header 
        type="workout"
      />

      <WorkoutContents />
      
      <Blog 
        type="workout"
        dropdownItems={["Title", "Content", "Title + Content"]}
      />

      <Footer />
    </>
  )
}

export default WorkoutApp