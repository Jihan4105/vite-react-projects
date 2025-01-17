import PropTypes from "prop-types"

Card.propTypes = {
  bannerImg: PropTypes.string.isRequired,
  dateTime: PropTypes.string.isRequired,
  cardTitle: PropTypes.string.isRequired,
  cardText: PropTypes.string.isRequired,
}

export default function Card({ bannerImg, dateTime, cardTitle, cardText, redirectURL = null, commentNumber = null }) {
  return (
    <div className="card">
      <figure className="banner">
        <img src={bannerImg} alt="banner-1" />
      </figure>
      <div className="content">
        <div className="meta">
          <span className="date-group">
            <ion-icon name="calendar-outline"></ion-icon>
            <time dateTime={dateTime}>{dateTime}</time>
          </span>
          {commentNumber 
            &&
            <span className="comment-group">
              <ion-icon name="chatbox-outline"></ion-icon>
              <span>{commentNumber}</span>
            </span>
          }
        </div>
        <h3 className="title">{cardTitle}</h3>
        <p className="text">
          {cardText}
        </p>
        {redirectURL 
          && 
          <a href={redirectURL} className="link-btn">
            <span>View More</span>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </a>
        }
        {

        }
      </div>
    </div>
  )
}