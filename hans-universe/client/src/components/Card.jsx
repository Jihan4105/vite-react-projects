import { useContext } from "react"
import PropTypes from "prop-types"

import { initPageScroll } from "@utils/utils"
import { JSXDispatchContext } from "@contexts/JSXDispatchContext"

Card.propTypes = {
  bannerImg: PropTypes.string.isRequired,
  dateTime: PropTypes.string.isRequired,
  cardTitle: PropTypes.string.isRequired,
  cardText: PropTypes.string.isRequired,
  docType: PropTypes.string.isRequired
}

export default function Card({ bannerImg, dateTime, cardTitle, cardText, docType }) {
  const JSXdispatch = useContext(JSXDispatchContext)

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
        </div>
        <h3 className="title">{cardTitle}</h3>
        <p className="text">
          {cardText}
        </p>
        <a className="link-btn" onClick={() => {JSXdispatch({ docType: docType}); initPageScroll();}}> 
          <span>View More</span>
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </a>
      </div>
    </div>
  )
}