import PropTypes from "prop-types"

import { capitalize } from "@mui/material"

Header.propTypes = {
  type: PropTypes.string.isRequired
}

export default function Header({ type }) {
  return (
    <section id={`${type}-header`}>
      <div className="container-jh">
        <h1 className="header-title">#{capitalize(type)} makes Me</h1>
      </div>
    </section>
  )
}