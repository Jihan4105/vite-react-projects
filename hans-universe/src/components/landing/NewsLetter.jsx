import firstNewsBannerImg from "@assets/landing/news-banner-1.jpg";
import secondNewsBannerImg from "@assets/landing/news-banner-2.jpg";
import thirdNewsBannerImg from "@assets/landing/news-banner-3.jpg";

export default function NewsLetter() {
  return (
    <section id="news">
      <div className="news-container container-jh">
        <h2 className="section-title">My Latest News</h2>
        <p className="section-text">
          Check my latest news and share me what you think!
        </p>
        <ul className="news-list">
          <li key={1}>
            <h3 className="news-genre">Workout</h3>
            <div className="news-card">
              <figure className="news-banner">
                <img src={firstNewsBannerImg} alt="news-banner-1" />
              </figure>
              <div className="news-content">
                <div className="news-meta">
                  <span>
                    <ion-icon name="calendar-outline"></ion-icon>
                    <time dateTime="2024-10-01">2024-10-01</time>
                  </span>
                </div>
                <h3 className="news-title">Best Traveling Place</h3>
                <p className="news-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolor, obcaecati eveniet officia
                  provident ea
                  non illo. Natus, debitis omnis.
                </p>
                <a href="#" className="news-link-btn">
                  <span>View More</span>
                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </a>
              </div>
            </div>
          </li>
          <li key={2}>
            <h3 className="news-genre">Book</h3>
            <div className="news-card">
              <figure className="news-banner">
                <img src={secondNewsBannerImg} alt="news-banner-1" />
              </figure>
              <div className="news-content">
                <div className="news-meta">
                  <span>
                    <ion-icon name="calendar-outline"></ion-icon>
                    <time dateTime="2024-10-01">2024-10-01</time>
                  </span>
                </div>
                <h3 className="news-title">Private Metting Room</h3>
                <p className="news-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolor, obcaecati eveniet officia
                  provident ea
                  non illo. Natus, debitis omnis.
                </p>
                <a href="#" className="news-link-btn">
                  <span>View More</span>
                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </a>
              </div>
            </div>
          </li>
          <li key={3}>
            <h3 className="news-genre">Thoughts</h3>
            <div className="news-card">
              <figure className="news-banner">
                <img src={thirdNewsBannerImg} alt="news-banner-1" />
              </figure>
              <div className="news-content">
                <div className="news-meta">
                  <span>
                    <ion-icon name="calendar-outline"></ion-icon>
                    <time dateTime="2024-10-01">2024-10-01</time>
                  </span>
                </div>
                <h3 className="news-title">The Best Business Ideas</h3>
                <p className="news-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolor, obcaecati eveniet officia
                  provident ea
                  non illo. Natus, debitis omnis.
                </p>
                <a href="#" className="news-link-btn">
                  <span>View More</span>
                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}