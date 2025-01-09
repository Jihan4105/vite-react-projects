import { BarChart } from "@mui/x-charts/BarChart"

import bodyProfileImg from "../assets/workout/body-profile.jpg"
import { inbodyDataset, valueFormatter } from "../data/chartData"

export default function WorkoutContents() {
  return(
    <section id="workout-contents">
      <div className="container-jh">
        <div className="body-profile-box">
          <h4 className="motto">&quot;Do as consistently as I can&quot;</h4>
          <img src={bodyProfileImg} alt="bodyprofile" width={100}/>
        </div>
        <article className="workout-article">
          <div className="article-title-box">
            <ion-icon name="bicycle-outline" />
            <h3 className="article-title">Daily Workout</h3>
          </div>
          <p className="description">
            I had nothing to do with sports before I went to the army. So I had a hard time in the early days of my military life and decided that I should exercise, and now exercise is a big driving force in my life.
          </p>
          <div className="article-title-box">
          <ion-icon name="accessibility-outline" />
            <h3 className="article-title">InBody</h3>
            <span className="bodyprofile-date">(As of October 22, 2024)</span>
            <BarChart 
              dataset={inbodyDataset}
              yAxis={[{
                scaleType: "band",
                dataKey: "type",
                disableTicks: true,
              }]}
              series={[{ dataKey: 'value', label: "mass", valueFormatter }]}
              layout="horizontal"
              grid={{vertical: true}}
              colors={["black"]}
              borderRadius={50}
              xAxis={[{
                label: "mass (kg)"
              }]}
              height={200}
              width={500}
            />
          </div>
        </article>
      </div>
    </section>
  ) 
}