import { useContext } from "react"
import { Link } from "react-router"

import Planet from "./Planet"
import astronautImg from "@assets/landing/astronaut.png"
import profilePlanetImg from "@assets/landing/planet.png"
import UserContext from "@contexts/UserContext"
import WindowContext from "@contexts/WindowContext"

import { initPageScroll } from "@utils/utils"

export default function Hero() {
  const user = useContext(UserContext)
  const windowWidth = useContext(WindowContext)

  return (
    <section id="hero">
      <div className="container-jh">
        <div className="planet-box">
          <img className="profile-planet" src={profilePlanetImg} alt="planet" />
          <Link className="profile" to={`/app/profile?userId=${user._id}`} title="Click Me!" onClick={() => {initPageScroll()}} />
        </div>
        <div className="astronaut-box">
          <h1 className="section-title">What Makes Me</h1>
          <div className="astronaut">
            <img className="astronaut-img gravity-moving" src={astronautImg} alt="" />
            {windowWidth > 450 &&
            <>
              <Planet 
                windowWidth={windowWidth}
                planetName="workout"
                coords={["87,84,80", "76,74,71", "50,48,47"]}
              />

              <Planet 
                windowWidth={windowWidth}
                planetName="books"
                coords={["88,80,76", "75,73,72", "50,48,48"]}
              />

              <Planet 
                windowWidth={windowWidth}
                planetName="skills"
                coords={["87,85,79", "76,74,71", "50,48,47"]}
              />

              <Planet 
                windowWidth={windowWidth}
                planetName="thoughts"
                coords={["85,96,75", "76,85,66", "50,55,44"]}
              />
            </>
            }

          </div>
        </div>
      </div>
    </section>
  )
}