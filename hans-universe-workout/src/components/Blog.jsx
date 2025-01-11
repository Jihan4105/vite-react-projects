import { capitalize } from "@mui/material"
import Dropdown from "react-bootstrap/Dropdown"
import DropdownButton from "react-bootstrap/esm/DropdownButton"
import PropTypes from "prop-types"
import BlogList from "./BlogList"

Blog.propTypes = {
  type: PropTypes.string.isRequired,
  dropdownItems: PropTypes.array.isRequired
}

export default function Blog({ type, dropdownItems }) {
  return (
    <section id={`${type}-blog`}>
      <div className="container-jh">
        <h1 className="section-title">My {capitalize(type)} Blog</h1>
        <div className="search-box">
          <DropdownButton
            key={`${type}-dropdown`}
            id={`${type}-blog-dropdown`}
            drop="down"
            align="end"
            variant="transparent"
            title={
              <div className="dropdown-filter">
                <ion-icon name="chevron-down-outline"></ion-icon>
                <span className="filter-status">Title</span>
              </div>
            }
          >
            {dropdownItems.map((item, index) => {
              return (
                <>
                  <Dropdown.Item key={index} eventKey={index}>{item}</Dropdown.Item>
                  {index != dropdownItems.length - 1 && <Dropdown.Divider />}
                </>
              )
            })}
          </DropdownButton>
          <div className="search-group">
            <ion-icon name="search-outline"></ion-icon>
            <input 
              type="text" 
              className="search-input" 
              spellCheck="false"
            />
          </div>
        </div>
        {type === "books" || <BlogList />}
      </div>
    </section>
  )
}