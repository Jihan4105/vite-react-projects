import LogoImg from "../assets/workout/logo-black.png"

export default function Footer() {
  return (
    <footer id="footer">
      <div className="container-jh">
        <div className="footer-content">
          <a href="#">
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
            <li><a href="#skills">Skills</a></li>
            <li><a href="#workout">Workout</a></li>
            <li><a href="#books">Books</a></li>
            <li><a href="/thoughts.html">Thoughts</a></li>
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