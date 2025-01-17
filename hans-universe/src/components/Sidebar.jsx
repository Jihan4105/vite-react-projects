import { UserContext } from "@/contexts/UserContext"
import { sidebarToggle } from "@utils/utils"
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
            <a href={`/src/html/skills.html?userId=${user.id}`} className="sidebar-link">
              <ion-icon name="code-outline"></ion-icon>
              Skills
            </a>
          </li>
          <li>
            <a href={`/src/html/workout.html?userId=${user.id}`} className="sidebar-link">
              <ion-icon name="barbell-outline"></ion-icon>
              Workout
            </a>
          </li>
          <li>
            <a href={`/src/html/books.html?userId=${user.id}`} className="sidebar-link">
              <ion-icon name="book-outline"></ion-icon>
              Books
            </a>
          </li>
          <li>
            <a href={`/src/html/thoughts.html?userId=${user.id}`} className="sidebar-link">
              <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
              Thoughts
            </a>
          </li>
          <li>
            <a href="#profile" className="sidebar-link">
              <ion-icon name="body-outline"></ion-icon>
              Profile
            </a>
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