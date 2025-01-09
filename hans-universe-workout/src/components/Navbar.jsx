import Dropdown from "react-bootstrap/Dropdown"
import DropdownButton from "react-bootstrap/DropdownButton"

import logoImage from "../assets/workout/logo-black.png"

export default function Navbar() {
  return (
    <nav id="nav">
      <div className="nav-container">
        <a href="#LadingPage" className="logo-link">
          <img src={logoImage} alt="logo" />
        </a>
        <div className="nav-box">

          <ul className="nav-links">
            <li className="skills-link"><a href="#skills">Skills</a></li>
            <li className="workout-link"><a href="#workout">Workout</a></li>
            <li className="books-link"><a href="#books">Books</a></li>
            <li className="thoughts-link"><a href="#thoughts">Thoughts</a></li>
            <li className="profile-link"><a href="#profile">Profile</a></li>
          </ul>

          <DropdownButton
            key="down"
            id="bell-dropdown-btn"
            drop="down"
            align="end"
            variant="transparent"
            title={
              <div className="bell-group">
                <ion-icon name="notifications-outline" />
                <span className="notification-number">9+</span>
              </div>
            }
          >
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </DropdownButton>

          <DropdownButton  
            key="down"
            id="profile-dropdown-btn"
            drop="down"
            variant="transparent"
            title={
              <div className="user-img-wrapper">
                <img src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" alt="image" className="user-img" width={90}/>
              </div>
            }
          >
            <Dropdown.Item eventKey="1">
              <div className="user-logout-group">
                <ion-icon name="log-out-outline"></ion-icon>
                <span>Log out</span>
              </div>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="2">
              <div className="user-edit-group">
                <ion-icon name="create-outline"></ion-icon>
                <span>Edit Profile</span>
              </div>
            </Dropdown.Item>
          </DropdownButton>

          <span className="user-name">John Doe</span>
        </div>
      </div>
    </nav>
  )
}