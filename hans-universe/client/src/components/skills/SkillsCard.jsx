import PropTypes from "prop-types"

SkillsCard.propTypes = {
  iconName: PropTypes.string.isRequired,
  skillTitle: PropTypes.string.isRequired,
  skillsArray: PropTypes.array.isRequired,
}

export default function SkillsCard({ iconName, skillTitle, skillsArray}) {
  return(
    <div className="skills-card">
      <ion-icon name={iconName} />
      <h3 className="card-title">{skillTitle}</h3>
      <ul className="card-item-list">
        {skillsArray.map((item, index) => {
          return(
            <li className="card-item" key={index}>
              <ion-icon name="chevron-forward-outline" />
              {item}
            </li>
          )
        })}
      </ul>
    </div>
  )
}