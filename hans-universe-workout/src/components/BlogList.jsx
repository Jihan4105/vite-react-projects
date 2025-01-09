import { capitalize } from "@mui/material"
import PropTypes from "prop-types"

BlogList.propTypes = {
  type: PropTypes.string.isRequired
}

export default function BlogList({ type }) {
  return (
    <section id={`${type}-blog`}>
      <div className="container-jh">
        <h1 className="section-title">My {capitalize(type)} Blog</h1>

        <div className="sarch-box blog-searchbox"></div>
      </div>
    </section>
  )
}