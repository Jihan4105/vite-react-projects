import { BarChart } from "@mui/x-charts/BarChart"

import bodyProfileImg from "../assets/workout/body-profile.jpg"
import { inbodyDataset, valueFormatter } from "../data/chartData"

export default function WorkoutContents() {
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
          <BarChart 
            dataset={inbodyDataset}
            yAxis={[{
              scaleType: "band",
              dataKey: "type",
              disableTicks: true,
            }]}
            sx={{
              "--my-custom-gradient": "url(#GlobalGradient)"
            }}
            slotProps={{
              popper: {
                sx: {
                  '--my-custom-gradient': 'linear-gradient(90deg, rgba(98,98,98,1) 0%, rgba(0,0,0,1) 100%);',
                },
              },
              legend: {
                hidden: true
              }
            }}
            series={[{ 
              dataKey: 'value', 
              label: "mass", valueFormatter,
              color: "var(--my-custom-gradient, rgba(98,98,98,1))"
            }]}
            layout="horizontal"
            grid={{vertical: true}}
            margin={{
              left: 120
            }}
            borderRadius={50}
            xAxis={[{
              label: "mass (kg)"
            }]}
            height={250}
          >
            <linearGradient id="GlobalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0" stopColor="rgba(98,98,98,1)" />
              <stop offset="1" stopColor="rgba(0,0,0,1)" />
            </linearGradient>
          </BarChart>
        </article>
      </div>
    </section>
  ) 
}