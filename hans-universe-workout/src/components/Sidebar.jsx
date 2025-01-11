export default function Sidebar() {
  return (
    <div className="sidebar-overlay">
      <aside className="sidebar">
        <button className="sidebar-close">
        <ion-icon name="close-outline"></ion-icon>
        </button>
        <ul className="sidebar-links">
          <li><a href="index.html" className="sidebar-link">Skills</a></li>
          <li><a href="products.html" className="sidebar-link">Workout</a></li>
          <li><a href="about.html" className="sidebar-link">Books</a></li>
          <li><a href="about.html" className="sidebar-link">Thoughts</a></li>
          <li><a href="about.html" className="sidebar-link">Profile</a></li>
        </ul>
      </aside>
    </div>
  )
}