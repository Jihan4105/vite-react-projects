import astronuatImg from "@assets/landing/astronuat.png"
import profilePlanetImg from "@assets/landing/planet.png"
import workoutPlanetImg from "@assets/landing/workout.png"
import booksPlanetImg from "@assets/landing/books.png"
import skillsPlanetImg from "@assets/landing/skills.png"
import thoughtsPlanetImg from "@assets/landing/thoughts.png"

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-container container-jh">
        <div className="planet-container">
          <div className="planet">
            <img src={profilePlanetImg} alt="planet" />
            <a className="profile" title="Clck ME!">
            </a>
          </div>
        </div>
        <div className="astronaut-container">
          <h1 className="section-title">What Makes Me</h1>
          <div className="astronaut">
            <img className="astronaut-img gravity-moving" src={astronuatImg} alt="" />

            <img className="workout-planet" src={workoutPlanetImg} usemap="#workout-planet" alt="workout" />
            <map name="workout-planet">
              <area shape="circle" coords="87,84,80" href="#workout" alt="workout" title="workout" />
            </map>

            <img className="books-planet" src={booksPlanetImg} usemap="#books-planet" alt="books" />
            <map name="books-planet">
              <area shape="circle" coords="88,80,76" href="#books" alt="books" title="books" />
            </map>

            <img className="skills-planet" src={skillsPlanetImg} usemap="#skills-planet" alt="skills" />
            <map name="skills-planet">
              <area shape="circle" coords="87,85,79" href="#skills" alt="skills" title="skills" />
            </map>

            <img className="thoughts-planet" src={thoughtsPlanetImg} usemap="#thoughts-planet" alt="thoughts" />
            <map name="thoughts-planet">
              <area shape="circle" coords="85,96,75" href="#thoughts" alt="thoughts" title="thoughts" />
            </map>
          </div>
        </div>
      </div>
    </section>
  )
}