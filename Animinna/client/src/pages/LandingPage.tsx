import { Link } from "react-router"
import { Swiper, SwiperSlide } from 'swiper/react';

// Assets
import HeroVideo from "@assets/landing/hero-video.mp4"
import ExpertReviews from "@assets/landing/experts-reviews.png"
import VioletEvergarden from "@assets/landing/violet.png"

export default function LandingPage() {
  return(
    <>
      {/* Hero */}
      <section id="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Discover Your Masterpieces Anime 
            </h1>
            <p className="hero-subtitle">
              The widest and most fantasic "Sekai" for who loves anime
            </p>
            <div className="button-box">
              <Link to="/library">VISIT LIBRARY</Link>
              <Link to="/news">VIEW NEWS</Link>
            </div>
          </div>
          <div className="hero-video">
            <video loop muted width={300}>
              <source src={HeroVideo} type="video/mp4"/>
            </video>
          </div>
          <div className="hero-circle" />
        </div>
      </section>

      {/* Genre */}
      <section id="genre">
        <div className="container">
          <div className="swiper-box">
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              ...
            </Swiper>
            <div className="genre-circle" />
          </div>
          <div className="genre-content">
            <h2 className="section-title">Variety Of Genre</h2>
            <p className="section-subtitle">
              With various tastes and different perspectives, we will introduce Otaku culture regardless of genre.
            </p>
          </div>
        </div>
      </section>

      {/* Review */}
      <section id="review">
        <div className="container">
          <div className="review-content">
            <h2 className="section-title">Highquality Of Review</h2>
            <p className="section-subtitle">
              Experts with over 20 years of Otaku experience write reliable reviews with different perspectives!
            </p>
          </div>
          <div className="review-image-wrapper">
            <img src={ExpertReviews} alt="" width={400} />
          </div>
        </div>
      </section>

      {/* News */}
      <section id="news">
        <div className="container">
          <div className="violet-wrapper">
            <img src={VioletEvergarden} alt="" width={400}/>
          </div>
          <div className="news-content">
            <h2 className="section-title">Latest News Of Anime</h2>
            <p className="section-subtitle">
              We always provide latest news you must interested in, take a look and monitoring your favorite anime!
            </p>
            <Link to={"/news"}>VIEW NEWS</Link>
          </div>
        </div>
      </section>
    </>
  )
}