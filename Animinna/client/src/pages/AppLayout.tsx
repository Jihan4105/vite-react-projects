import { Outlet, Link } from "react-router"

// Assets
import Logo from "@assets/logo.png"

export default function AppLayout() {
  return (
    <>    
      <nav id="navbar">
        <div className="container">
          <Link to="/" className="logo-wrapper">
            <img src={Logo} alt="Logo" />
          </Link>
          <ul className="nav-links">
            <li className="nav-link">
              <Link to="/library">Library</Link>
            </li>
            <li className="nav-link">
              <Link to="/news">News</Link>
            </li>
          </ul>
          <div className="menu-btn">
            <i className="fa-solid fa-bars-staggered"></i>
          </div>
        </div>
      </nav>

      <Outlet />

      <footer id="footer">
        <div className="container">
          <div className="logo-box">
            <img src={Logo} alt="" />
            <p className="logo-text">Your best Anime info site forever.</p>
          </div>
          <ul className="about-us-links">
            <li><Link to="#Company">Company</Link></li>
            <li><Link to="#Aboutus">About us</Link></li>
            <li><Link to="#Philosophy">Philosophy</Link></li>
          </ul>
          <ul className="footer-links">
            <li><Link to="/library">Library</Link></li>
            <li><Link to="/news">News</Link></li>
          </ul>
        </div>
      </footer>
    </>
  )
}