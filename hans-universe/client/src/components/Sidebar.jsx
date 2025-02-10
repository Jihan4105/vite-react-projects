import { Link } from "react-router"

import UserContext from "@contexts/UserContext"
import { sidebarToggle, initPageScroll } from "@utils/utils"
import { useContext } from "react"

export default function Sidebar() {
  const user = useContext(UserContext)

  return (
    <div className="sidebar-overlay">
      <aside className="sidebar">
        <button className="sidebar-close" onClick={() => {sidebarToggle()}}>
        <ion-icon name="close-outline"></ion-icon>
        </button>
        <ul className="sidebar-links">
          <li>
            <Link to={`/app/skills?userId=${user._id}`} onClick={() => {initPageScroll(); sidebarToggle()}} className="sidebar-link">
              <ion-icon name="code-outline"></ion-icon>
              Skills
            </Link>
          </li>
          <li>
            <Link to={`/app/workout?userId=${user._id}`} onClick={() => {initPageScroll(); sidebarToggle()}} className="sidebar-link">
              <ion-icon name="barbell-outline"></ion-icon>
              Workout
            </Link>
          </li>
          <li>
            <Link to={`/app/books?userId=${user._id}`} onClick={() => {initPageScroll(); sidebarToggle()}} className="sidebar-link">
              <ion-icon name="book-outline"></ion-icon>
              Books
            </Link>
          </li>
          <li>
            <Link to={`/app/thoughts?userId=${user._id}`} onClick={() => {initPageScroll(); sidebarToggle()}} className="sidebar-link">
              <ion-icon name="chatbubble-outline"></ion-icon>
              Thoughts
            </Link>
          </li>
          <li>
            <Link to={`/app/profile?userId=${user._id}`} onClick={() => {initPageScroll(); sidebarToggle()}} className="sidebar-link">
              <ion-icon name="body-outline"></ion-icon>
              Profile
            </Link>
          </li>
          <li>
            <a href="#editprofile" className="sidebar-link">
              <ion-icon name="create-outline"></ion-icon>
              Edit Profile
            </a>
          </li>
          <li>
            <a href="#logout" className="sidebar-link">
              <ion-icon name="log-out-outline"></ion-icon>
              Logout
            </a>
          </li>
        </ul>
      </aside>
    </div>
  )
}