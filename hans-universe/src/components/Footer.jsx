import { useContext } from "react"

import LogoImg from "@assets/logo-black.png"

import { UserContext } from "@contexts/UserContext"
import { JSXDispatchContext } from "@contexts/JSXDispatchContext"

import { initPageScroll } from "@utils/utils"

export default function Footer() {
  const user = useContext(UserContext)
  const JSXdispatch = useContext(JSXDispatchContext)

  return (
    <footer id="footer">
      <div className="container-jh">
        <div className="footer-content">
          <a onClick={() => {JSXdispatch({ docType: "landing" }); initPageScroll();}}>
            <img src={LogoImg} alt="Logo" />
          </a>
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
            <li><a onClick={() => {JSXdispatch({ docType: "skills" }); initPageScroll();}}>Skills</a></li>
            <li><a onClick={() => {JSXdispatch({ docType: "workout" }); initPageScroll();}}>Workout</a></li>
            <li><a onClick={() => {JSXdispatch({ docType: "books" }); initPageScroll();}}>Books</a></li>
            <li><a onClick={() => {JSXdispatch({ docType: "thoughts" }); initPageScroll();}}>Thoughts</a></li>
            <li><a href="#profile">Profile</a></li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <span>Copyright ©2024 All rights reserved.</span>
      </div>
    </footer>
  )
}