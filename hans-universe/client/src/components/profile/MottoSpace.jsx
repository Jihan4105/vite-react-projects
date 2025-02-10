import { useContext } from "react"

import mottoAstronautImg from "@assets/profile/motto-astronaut.png"

import WindowContext from "@contexts/WindowContext"

export default function MottoSpace() {
  const windowWidth = useContext(WindowContext)

  return(
    <section id="profile-motto">
      <div className="container-jh">
        <p className="motto-text">
          "I want to be an astronaut <br/> who constantly explores the wide space<br/> named the world"
        </p>
        {windowWidth > 768 &&
          <div className="astronaut-wrapper gravity-moving">
            <img src={mottoAstronautImg} alt="" />
          </div>
        }
      </div>
    </section>
  )
}