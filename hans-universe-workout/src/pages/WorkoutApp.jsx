import Navbar from "../components/Navbar"
import WorkoutContents from "../components/WorkoutContents"
import Header from "../components/Header"
import BlogList from "../components/BlogList"

function WorkoutApp() {
  return (
    <>
      <Navbar />

      <Header 
        type="workout"
      />

      <WorkoutContents />
      
      <BlogList 
        type="workout"
      />
    </>
  )
}

export default WorkoutApp
