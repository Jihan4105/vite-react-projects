import { useContext } from "react"
import { Link } from "react-router"

import UserContext from "@/contexts/UserContext"

import { initPageScroll } from "@utils/utils"

export default function Card({ bannerImg, dateTime, cardTitle, cardText, docType }) {
  const user = useContext(UserContext)

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
        <Link className="link-btn" to={`/app/${docType}?userId=${user._id}`} onClick={() => {initPageScroll()}}>
          <span>View More</span>
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </Link>
      </div>
    </div>
  )
}