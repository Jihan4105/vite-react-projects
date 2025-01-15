import { useState } from "react"

import Planet from "./Planet"

import astronautImg from "@assets/landing/astronaut.png"
import profilePlanetImg from "@assets/landing/planet.png"
import useWindow from "@/hooks/useWindow"


export default function Hero() {
  const [windowSize, setWindowSize] = useState({
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight,
  })
  
  useWindow(windowSize, setWindowSize)

  return (
    <section id="hero">
      <div className="container-jh">
        <div className="planet-box">
          <img className="profile-planet" src={profilePlanetImg} alt="planet" />
          <a className="profile" title="Clck ME!"></a>
        </div>
        <div className="astronaut-box">
          <h1 className="section-title">What Makes Me</h1>
          <div className="astronaut">
            <img className="astronaut-img gravity-moving" src={astronautImg} alt="" />

            {windowSize.innerWidth > 450 &&
            <>
              <Planet 
                windowSize={windowSize}
                planetName="workout"
                coords={["87,84,80", "76,74,71", "50,48,47"]}
              />

              <Planet 
                windowSize={windowSize}
                planetName="books"
                coords={["88,80,76", "75,73,72", "50,48,48"]}
              />

              <Planet 
                windowSize={windowSize}
                planetName="skills"
                coords={["87,85,79", "76,74,71", "50,48,47"]}
              />

              <Planet 
                windowSize={windowSize}
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