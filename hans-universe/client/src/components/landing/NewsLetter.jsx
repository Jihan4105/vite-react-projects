import firstNewsBannerImg from "@assets/landing/news-banner-1.jpg";
import secondNewsBannerImg from "@assets/landing/news-banner-2.jpg";
import thirdNewsBannerImg from "@assets/landing/news-banner-3.jpg";
import Card from "../Card";

export default function NewsLetter() {
  return (
    <section id="news">
      <div className="container-jh">
        <h1 className="section-title">My Latest News</h1>
        <p className="section-text">
          Check my latest news and share me what you think!
        </p>
        <ul className="news-list">
          <li key={1}>
            <h3 className="news-genre">Workout</h3>
            <Card 
              bannerImg={firstNewsBannerImg}
              dateTime="2024-10-01"
              cardTitle="Best Traveling Place"
              cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolor, obcaecati eveniet officia
                  provident ea
                  non illo. Natus, debitis omnis."
              docType="workout"
            />
          </li>
          <li key={2}>
            <h3 className="news-genre">Book</h3>
            <Card 
              bannerImg={secondNewsBannerImg}
              dateTime="2024-10-01"
              cardTitle="Private Meeting Room"
              cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolor, obcaecati eveniet officia
                  provident ea
                  non illo. Natus, debitis omnis."
              docType="books"
            />
          </li>
          <li key={3}>
            <h3 className="news-genre">Thoughts</h3>
            <Card 
              bannerImg={thirdNewsBannerImg}
              dateTime="2024-10-01"
              cardTitle="The Best Business Ideas"
              cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolor, obcaecati eveniet officia
                  provident ea
                  non illo. Natus, debitis omnis."
              docType="thoughts"
            />
          </li>
        </ul>
      </div>
    </section>
  )
}