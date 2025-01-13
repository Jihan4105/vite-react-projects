import { capitalize } from "@mui/material"
import Dropdown from "react-bootstrap/Dropdown"
import DropdownButton from "react-bootstrap/esm/DropdownButton"
import PropTypes from "prop-types"
import BlogList from "./BlogList"
import { useState } from "react"

Blog.propTypes = {
  type: PropTypes.string.isRequired,
  dropdownItems: PropTypes.array.isRequired
}

export default function Blog({ type, dropdownItems }) {
  const [searchValue, setSearchValue] = useState("")
  const [filterValue, setFilterValue] = useState("Title")

  return (
    <section id={`${type}-blog`}>
      <div className="container-jh">
        <h1 className="section-title">My {capitalize(type)} Blog</h1>
        <div className="search-box">
          <DropdownButton
            id={`${type}-dropdown-btn`}
            drop="down"
            align="end"
            variant="transparent"
            title={
              <div className="dropdown-filter">
                <ion-icon name="chevron-down-outline"></ion-icon>
                <span className="filter-status">{filterValue}</span>
              </div>
            }
          >
            {dropdownItems.map((item, index) => {
              return (
                <div key={index} onClick={(e) => {setFilterValue(e.target.textContent)}}>
                  <Dropdown.Item eventKey={index}>{item}</Dropdown.Item>
                  {index != dropdownItems.length - 1 && <Dropdown.Divider />}
                </div>
              )
            })}
          </DropdownButton>
          <div className="search-group">
            <label htmlFor={`${type}-search`}><ion-icon name="search-outline"></ion-icon></label>
            <input  
              id={`${type}-search`}
              name={`${type}-search`}
              type="text" 
              className="search-input" 
              spellCheck="false"
              value={searchValue}
              onChange={(e) => {setSearchValue(e.target.value)}}
            />
          </div>
        </div>
        {type === "books" || <BlogList type={type} searchValue={searchValue} filterValue={filterValue} />}
      </div>
    </section>
  )
}