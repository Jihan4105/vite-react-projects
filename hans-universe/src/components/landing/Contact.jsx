export default function Contact() {
  return (
    <section id="contact">
      <div className="container-lg">
        <h1 className="section-title">Let's Contact</h1>
        <p className="section-text">I look forward to communicating with you</p>
        <div className="contact-container">
          <div className="getin">
            <h3>Get In Touch</h3>
            <div className="underline"></div>
            <div className="getin-container">
              <div className="getin-details">
                <h3>Adress</h3>
                <div className="getin-information">
                  <i className="fa-solid fa-house"></i>
                  <p>15 Munhwaroo, Donreagu, Pusan, Korea</p>
                </div>
              </div>
              <div className="getin-details">
                <h3>Phone</h3>
                <div className="getin-information">
                  <i className="fa-solid fa-phone"></i>
                  <p>(+82) 10 4105 3762</p>
                </div>
              </div>
              <div className="getin-details">
                <h3>Email</h3>
                <div className="getin-information">
                  <i className="fa-solid fa-envelope"></i>
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
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="form">
            <h3>Send Message</h3>
            <div className="form-row">
              <input type="text" placeholder="Your Name" name="" id="" />
              <input type="text" placeholder="Your Email" name="" id="" />
            </div>
            <div className="form-col">
              <input type="text" placeholder="Subject" name="" id="" />
            </div>
            <div className="form-col">
              <textarea cols="30" placeholder="What you want to say?" name="textarea" id="textarea"></textarea>
            </div>
            <div className="form-col">
              <button>
                <i className="fa-solid fa-paper-plane"></i>
                <span>Send Message</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}