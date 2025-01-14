import Navbar from "../components/Navbar"
import Hero from "../components/landing/Hero"
import NewsLetter from "@/components/landing/NewsLetter"
import Contact from "@/components/landing/Contact"
import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"

function LandingApp() {

  return (
    <>
      <Navbar />
      
      <Sidebar />
      
      <Hero />

      <NewsLetter />

      <Contact />
      
      <Footer />
    </>
  )
}

export default LandingApp
