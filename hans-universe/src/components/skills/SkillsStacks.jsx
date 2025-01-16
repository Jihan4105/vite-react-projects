import SkillsCard from "./SkillsCard"
import skillsAstronautImg from "@assets/skills/skills-astronaut.png"
import githubPlanetImg from "@assets/skills/skills-github-planet.png"

export default function SkillsStacks() {
  return(
    <section id="skills-stack">
      <div className="container-jh">
        <h1 className="section-title">What Can I do</h1>
        <p className="section-text">Check my skills that I can handle it!</p>
        <div className="stack-box">
          <SkillsCard 
            iconName="layers-outline"
            skillTitle="UX/UI Design"
            skillsArray={["skill1","skill2","skill3","skill4","skill6"]}
          />
          <SkillsCard 
            iconName="code-slash-outline"
            skillTitle="Development"
            skillsArray={["HTML/CSS","JS","SCSS","REACT","TS"]}
          />
          <SkillsCard 
            iconName="bulb-outline"
            skillTitle="Idea Design"
            skillsArray={["skill1","skill2","skill3","skill4","skill6"]}
          />
        </div>
        <div className="skills-astronaut-box">
          <div className="skills-astronaut-group">
            <img src={skillsAstronautImg} alt="" />
            <a href="https://github.com/Jihan4105">
              <img className="gravity-moving" src={githubPlanetImg} alt=""/>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}