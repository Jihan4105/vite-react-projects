import { useContext } from "react"
import { useNavigate } from "react-router"

import UserContext from "@contexts/UserContext"

import workoutPlanetImg from "@assets/landing/workout.png"
import booksPlanetImg from "@assets/landing/books.png"
import skillsPlanetImg from "@assets/landing/skills.png"
import thoughtsPlanetImg from "@assets/landing/thoughts.png"

import { initPageScroll } from "@utils/utils"

export default function Planet({ windowWidth, planetName, coords }) {
  const user = useContext(UserContext)
  const navigate = useNavigate()

  let planetImg
  switch(planetName) {
    case "workout" :
      planetImg = workoutPlanetImg
      break;
    case "books" :
      planetImg = booksPlanetImg
      break;
    case "skills" :
      planetImg = skillsPlanetImg
      break;
    case "thoughts" :
      planetImg = thoughtsPlanetImg
      break;
  }

  return(
    <>
      <img className={`${planetName}-planet`} src={planetImg} useMap={`#${planetName}-planet`} />
      {windowWidth > 768
        &&    
        <map name={`${planetName}-planet`}>
          <area shape="circle" coords={coords[0]} onClick={() => {navigate(`/app/${planetName}?userId=${user._id}`); initPageScroll();}} title={`${planetName}`}  style={{ cursor: "pointer" }}/>
        </map>
      }
      {windowWidth <= 768 && windowWidth > 576
        && 
        <map name={`${planetName}-planet`}>
          <area shape="circle" coords={coords[1]} onClick={() => {navigate(`/app/${planetName}?userId=${user._id}`); initPageScroll();}} title={`${planetName}`} style={{ cursor: "pointer" }}/>
        </map>
      }
      {windowWidth <= 576 && 
        <map name={`${planetName}-planet`}>
          <area shape="circle" coords={coords[2]} onClick={() => {navigate(`/app/${planetName}?userId=${user._id}`); initPageScroll();}} title={`${planetName}`} style={{ cursor: "pointer" }}/>
        </map>
      }
    </>
  )
}