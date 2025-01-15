export default function Contact() {
  return (
    <section id="contact">
      <div className="container-jh">
        <h1 className="section-title">Let's Contact</h1>
        <p className="section-text">I look forward to communicating with you</p>
        <div className="contact-box">
          <div className="getin">
            <h3>Get In Touch</h3>
            <div className="underline"></div>
            <div className="getin-box">
              <div className="getin-details">
                <h3>Adress</h3>
                <div className="getin-information">
                  <ion-icon name="home-outline"></ion-icon>
                  <p>15 Munhwaroo, Donreagu, Pusan, Korea</p>
                </div>
              </div>
              <div className="getin-details">
                <h3>Phone</h3>
                <div className="getin-information">
                  <ion-icon name="call-outline"></ion-icon>
                  <p>(+82) 10 4105 3762</p>
                </div>
              </div>
              <div className="getin-details">
                <h3>Email</h3>
                <div className="getin-information">
                  <ion-icon name="mail-open-outline"></ion-icon>
                  <p>
                    sam999219@gmail.com<br/>
                    wlgks6979@naver.com
                  </p>
                </div>
              </div>
              <div className="getin-details">
                <h3>Social Media</h3>
                <div className="pro-link">
                  <a href="https://github.com/Jihan4105" title="https://github.com/Jihan4105">
                    <ion-icon name="logo-github"></ion-icon>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="form">
            <h3>Send Message</h3>
            <div className="form-row">
              <input type="text" placeholder="Your Name" name="contact-name" id="contact-name" />
              <input type="text" placeholder="Your Email" name="contact-email" id="contact-email" />
            </div>
            <div className="form-col">
              <input type="text" placeholder="Subject" name="contact-subject" id="contact-subject" />
            </div>
            <div className="form-col">
              <textarea cols="30" placeholder="What you want to say?" name="contact-textarea" id="contact-textarea"></textarea>
            </div>
            <div className="form-col">
              <button>
                <ion-icon name="paper-plane-outline"></ion-icon>
                <span>Send Message</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}