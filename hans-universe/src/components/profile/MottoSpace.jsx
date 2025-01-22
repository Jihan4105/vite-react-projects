import mottoAstronautImg from "@assets/profile/motto-astronaut.png"

export default function MottoSpace() {
  return(
    <section id="profile-motto">
      <div className="container-jh">
        <p className="motto-text">
          "I want to be an astronaut who constantly explores the wide space named the world"
        </p>
        <div className="astronaut-wrapper gravity-moving">
          <img src={mottoAstronautImg} alt="" />
        </div>
      </div>
    </section>
  )
}