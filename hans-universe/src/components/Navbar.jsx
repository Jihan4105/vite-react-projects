import { useContext } from "react"
import Dropdown from "react-bootstrap/Dropdown"
import DropdownButton from "react-bootstrap/DropdownButton"

import logoImage from "@assets/logo-black.png"
import { sidebarToggle, initPageScroll } from "@utils/utils.js"
import { UserContext } from "@contexts/UserContext"
import { JSXDispatchContext } from "@contexts/JSXDispatchContext"


export default function Navbar() {
  const user = useContext(UserContext)
  const JSXdispatch = useContext(JSXDispatchContext)

  return (
    <nav id="nav">
      <div className="container-jh">
        <a onClick={() => {JSXdispatch({ docType: "landing" }); initPageScroll();}} className="logo-link">
          <img src={logoImage} alt="logo" />
        </a>
        <div className="nav-box">

          <ul className="nav-links">
            <li><a onClick={() => {JSXdispatch({ docType: "skills" }); initPageScroll();}}>Skills</a></li>
            <li><a onClick={() => {JSXdispatch({ docType: "workout" }); initPageScroll();}}>Workout</a></li>
            <li><a onClick={() => {JSXdispatch({ docType: "books" }); initPageScroll();}}>Books</a></li>
            <li><a onClick={() => {JSXdispatch({ docType: "thoughts" }); initPageScroll();}}>Thoughts</a></li>
            <li><a href="#profile">Profile</a></li>
          </ul>

          <DropdownButton
            id="bell-dropdown-btn"
            drop="down"
            align="end"
            variant="transparent"
            title={
              <div className="notifications-btn icon-btn">
                <ion-icon name="notifications-outline" />
                <span className="notifications-number">9+</span>
              </div>
            }
          >
            <Dropdown.Item eventKey="1">
              <div className="notification-item">
                <div className="notification-profile"></div>
                <p className="notification-text">Semen Doe reply to your comment in &quot;Subject Lorem Ipusm&quot;</p>
              </div>
            </Dropdown.Item>
            <Dropdown.Item eventKey="2">
              <div className="notification-item">
                <div className="notification-profile"></div>
                <p className="notification-text">Semen Doe reply to your comment in &quot;Subject Lorem Ipusm&quot;</p>
              </div>
            </Dropdown.Item>
            <Dropdown.Item eventKey="3">
              <div className="notification-item">
                <div className="notification-profile"></div>
                <p className="notification-text">Semen Doe reply to your comment in &quot;Subject Lorem Ipusm&quot;</p>
              </div>
            </Dropdown.Item>
            <Dropdown.Item eventKey="4">
              <div className="notification-item">
                <div className="notification-profile"></div>
                <p className="notification-text">Semen Doe reply to your comment in &quot;Subject Lorem Ipusm&quot;</p>
              </div>
            </Dropdown.Item>
          </DropdownButton>

          <DropdownButton
            id="profile-dropdown-btn"
            drop="down"
            variant="transparent"
            title={
              <div className="user-img-wrapper">
                <img src={user.userProfile} alt="" className="user-img" />
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
          <span className="user-name">{user.userName}</span>
          <div className="menu-btn icon-btn" onClick={() => {sidebarToggle()}}>
            <ion-icon name="menu-outline" />
          </div>
        </div>
      </div>
    </nav>
  )
}