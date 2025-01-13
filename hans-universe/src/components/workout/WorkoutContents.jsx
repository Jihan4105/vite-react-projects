import { useContext } from "react"
import bodyProfileImg from "../../assets/workout/body-profile.jpg"
import HorizontalChart from "./HorizontalChart"
import VerticalChart from "./VerticalChart"

import { WindowContext } from "../../contexts/WindowContext"

export default function WorkoutContents() {
  const windowWidth = useContext(WindowContext)

  return(
    <section id="workout-contents">
      <div className="container-jh">
        <div className="body-profile-box">
          <h4 className="motto">&quot;Do as consistently as I can&quot;</h4>
          <img src={bodyProfileImg} alt="bodyprofile" />
        </div>
        <article className="workout-article">
          <div className="article-title-box">
            <ion-icon name="bicycle-outline" />
            <h2 className="article-title">Daily Workout</h2>
          </div>
          <p className="description">
            I had nothing to do with sports before I went to the army. So I had a hard time in the early days of my military life and decided that I should exercise, and now exercise is a big driving force in my life.
          </p>
          <div className="article-title-box">
            <ion-icon name="accessibility-outline" />
            <h2 className="article-title">InBody</h2>
            <span className="bodyprofile-date">(As of January 01, 2025)</span>
          </div>
          {windowWidth > 500 && <HorizontalChart />}
          {windowWidth <= 500 && <VerticalChart />}
        </article>
      </div>
    </section>
  ) 
}