import PortfolioCard from "./PortfolioCard"

const titleArray = ["Portfolio 1","Portfolio 2","Portfolio 3","Portfolio 4","Portfolio 5","Portfolio 6",]

export default function Portfolio() {
  return(
    <section id="portfolio">
      <div className="container-jh">
        <h1 className="section-title">What I've been doing</h1>
        <div className="portfolio-box">
          {
            titleArray.map((title, index) => {
              return(
                <PortfolioCard
                  key={index}
                  title={title}
                  desc="Lorem Ipsum Dolor sit alstLorem Ipsum Dolor sit alstLorem Ipsum Dolor sit alst"
                  quickViewURL="#"
                  githubURL="https://github.com/Jihan4105"
                />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}