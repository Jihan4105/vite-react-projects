import workoutPlanetImg from "@assets/landing/workout.png"
import booksPlanetImg from "@assets/landing/books.png"
import skillsPlanetImg from "@assets/landing/skills.png"
import thoughtsPlanetImg from "@assets/landing/thoughts.png"
import PropTypes from "prop-types"

Planet.propTypes = {
  windowSize: PropTypes.object.isRequired,
  planetName: PropTypes.string.isRequired,
  coords: PropTypes.array.isRequired
}

export default function Planet({ windowSize, planetName, coords }) {

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
      {windowSize.innerWidth > 768
        &&    
        <map name={`${planetName}-planet`}>
          <area shape="circle" coords={coords[0]} href={`/src/html/${planetName}.html`} title={`${planetName}`} />
        </map>
      }
      {windowSize.innerWidth <= 768 && windowSize.innerWidth > 576
        && 
        <map name={`${planetName}-planet`}>
          <area shape="circle" coords={coords[1]} href={`/src/html/${planetName}.html`} title={`${planetName}`} />
        </map>
      }
      {windowSize.innerWidth <= 576 && 
        <map name={`${planetName}-planet`}>
          <area shape="circle" coords={coords[2]} href={`/src/html/${planetName}.html`} title={`${planetName}`} />
        </map>
      }
    </>
  )
}