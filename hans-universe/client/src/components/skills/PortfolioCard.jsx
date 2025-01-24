import PropTypes from "prop-types"

PortfolioCard.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  quickViewURL: PropTypes.string.isRequired,
  githubURL: PropTypes.string.isRequired,
}

export default function PortfolioCard({ title, desc, quickViewURL, githubURL }) {
  return(
    <div className="portfolio-card">
      <div className="portfolio-modal">
        <h3 className="portfolio-title">{title}</h3>
        <p className="portfolio-desc">
          {desc}
        </p>
        <div className="link-group">
          <a className="portfolio-quickview" href={quickViewURL}>Click to QuickView!</a>
          <a className="portfolio-github" href={githubURL}>Visit my github</a>
        </div>
      </div>
    </div>
  )
}