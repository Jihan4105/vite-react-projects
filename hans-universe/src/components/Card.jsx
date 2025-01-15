export default function Card({ bannerImg, dateTime, cardTitle, cardText, redirectURL }) {
  return (
    <div className="card">
      <figure className="banner">
        <img src={bannerImg} alt="banner-1" />
      </figure>
      <div className="content">
        <div className="meta">
          <span>
            <ion-icon name="calendar-outline"></ion-icon>
            <time dateTime={dateTime}>{dateTime}</time>
          </span>
        </div>
        <h3 className="title">{cardTitle}</h3>
        <p className="text">
          {cardText}
        </p>
        <a href={redirectURL} className="link-btn">
          <span>View More</span>
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </a>
      </div>
    </div>
  )
}