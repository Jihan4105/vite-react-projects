import { Link } from "react-router"

// Assets
import HeroVideo from "@assets/landing/hero-video.mp4"

export default function Hero() {
  return(
    <section id="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            discover Your Masterpieces Anime 
          </h1>
          <p className="hero-subtitle">
            The widest and most fantasic "Sekai" for who loves anime
          </p>
          <div className="button-box">
            <Link to="/library">VISIT LIBRARY</Link>
            <Link to="/news">VIEW NEWS</Link>
          </div>
        </div>
        <div className="hero-video">
          <video loop muted width={300}>
            <source src={HeroVideo} type="video/mp4"/>
          </video>
        </div>
      </div>
    </section>
  )
}