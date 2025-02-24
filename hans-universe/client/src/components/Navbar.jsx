import { useState, useContext, useEffect } from "react"
import Dropdown from "react-bootstrap/Dropdown"
import DropdownButton from "react-bootstrap/DropdownButton"
import { Link, useNavigate } from "react-router"

import logoImage from "@assets/logo-black.png"
import { sidebarToggle, initPageScroll } from "@utils/utils.js"
import UserContext from "@contexts/UserContext"
import AuthContext from "@contexts/AuthContext"
import axios from "@api/api.js"
import useStateEffect from "@hooks/useStateEffect"

export default function Navbar() {
  const navigate = useNavigate()
  const user = useContext(UserContext)
  const { setAuth } = useContext(AuthContext)
  const [isLogoutTriggered, setIsLogoutTriggered] = useState(false)

  useStateEffect(() => {
    navigate("/", { replace: true })
  }, [isLogoutTriggered])

  return (
    <nav id="nav">
      <div className="container-jh">
        <Link to={`/app/landing?userId=${user._id}`} className="logo-link" onClick={() => {initPageScroll()}}>
          <img src={logoImage} alt="logo" />
        </Link>
        <div className="nav-box">

          <ul className="nav-links">
            <li>
              <Link to={`/app/skills?userId=${user._id}`} onClick={() => {initPageScroll()}}>
                Skills
              </Link>
            </li>
            <li>
              <Link to={`/app/workout?userId=${user._id}`} onClick={() => {initPageScroll()}}>
                Workout
              </Link>
            </li>
            <li>
              <Link to={`/app/books?userId=${user._id}`} onClick={() => {initPageScroll()}}>
                Books
              </Link>
            </li>
            <li>
              <Link to={`/app/thoughts?userId=${user._id}`} onClick={() => {initPageScroll()}}>
                Thoughts
              </Link>
            </li>
            <li>
              <Link to={`/app/profile?userId=${user._id}`} onClick={() => {initPageScroll()}}>
                Profile
              </Link>
            </li>
          </ul>

          <DropdownButton
            id="bell-dropdown-btn"
            drop="down"
            align="end"
            variant="transparent"
            title={
              <div className="notifications-btn">
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
            <Dropdown.Item eventKey="1" onClick={() => {logoutButtonHandler(setAuth, setIsLogoutTriggered)}}>
              <div className="user-logout-group">
                <ion-icon name="log-out-outline"></ion-icon>
                <span>Sign Out</span>
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

async function logoutButtonHandler(setAuth, setIsLogoutTriggered) {
  try {
    const res = await axios.get("/sign/logout", { withCredentials: true })

    console.log(res.status)

    if(res.status === 204) {
      setAuth({})
      setIsLogoutTriggered(true)
    }
  } catch(error) {
    alert(`Server Can't response by ${error.message}`)
  }
}