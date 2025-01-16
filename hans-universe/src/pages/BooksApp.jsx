import Navbar from "@components/Navbar"
import Header from "@components/Header"
import Blog from "@components/Blog"
import Footer from "@components/Footer"
import Sidebar from "@components/Sidebar"
import BooksContent from "@/components/books/BooksContent"

function WorkoutApp() {
  return (
    <>
      <Navbar />
      
      <Sidebar />

      <Header 
        type="books"
      />

      <BooksContent />
        
      <Blog 
        type="books"
        dropdownItems={["Genre1", "Genre2", "Genre3"]}
      />

      <Footer />
    </>
  )
}

export default WorkoutApp
