import introduceImg from "@assets/profile/introduce-img.jpg"

export default function Introuduce() {
  return (
    <section id="introduce">
      <div className="container-jh">
        <div className="introduce-img-wrapper">
          <img src={introduceImg} alt="" />
        </div>
        <div className="introduce-text-group">
          <h1 className="section-title">HI there!</h1>
          <p className="introduce-text">
            I live in Korea and love computers. I am interested in what do I need now to live in a future where I can enjoy what I want to do to my heart's content.
          </p>
        </div>
      </div>
    </section>
  )
}