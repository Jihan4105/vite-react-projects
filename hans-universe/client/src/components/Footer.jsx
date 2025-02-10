import { useContext } from "react"
import { Link } from "react-router"

import LogoImg from "@assets/logo-black.png"

import UserContext from "@contexts/UserContext"

import { initPageScroll } from "@utils/utils"

export default function Footer() {
  const user = useContext(UserContext)

  return (
    <footer id="footer">
      <div className="container-jh">
        <div className="footer-content">
          <Link to={`/app/landing?userId=${user._id}`} onClick={() => {initPageScroll()}}>
            <img src={LogoImg} alt="logo" />
          </Link>
          <p><span>Address:</span> Pusan Dongnaegu Munhwaroo 15</p>
          <p><span>Phone:</span> (+82) 10-4105-3762</p>
          <p><span>Email:</span> sam999219@gmail.com</p>
          <p><span>Email:</span> wlgks6979@naver.com</p>
          <h5>Follow Me</h5>
          <div>
            <a href="https://github.com/Jihan4105" title="https://github.com/Jihan4105">
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </div>
        </div>
        <div className="verticle-line"></div>
        <div>
          <ul className="footer-links">
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
        </div>
      </div>
      <div className="copyright">
        <span>Copyright ©2024 All rights reserved.</span>
      </div>
    </footer>
  )
}