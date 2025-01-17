import { useContext, useState } from "react"
import { Pagination } from "@mui/material"
import PropTypes from "prop-types"

import { WindowContext } from "@contexts/WindowContext"

import workoutBlogDatas from "@data/workoutBlogDatas" 
import thoughtsBlogDatas from "@data/thoughtsBlogDatas"
import booksBlogDatas from "@data/booksBlogDatas"

BlogList.propTypes = {
  type: PropTypes.string.isRequired,
  searchValue: PropTypes.string.isRequired,
  filterValue: PropTypes.string.isRequired
}

export default function BlogList({ type, searchValue, filterValue}) {

  const [selectedPage, setSelectedPage] = useState("1")
  const windowWidth = useContext(WindowContext)
  let blogDatas
  let filteredDatas

  switch(type) {
    case "workout" :
      blogDatas = workoutBlogDatas
      break;
    case "thoughts" :
      blogDatas = thoughtsBlogDatas
      break;
    case "books" :
      blogDatas = booksBlogDatas
      break;
  } 

  filteredDatas = blogDatas.filter((blogData) => {
    if(type === "workout" || type === "thoughts") {
      if(filterValue === "Title + Content") {
        return (
          blogData.title.toLowerCase().includes(searchValue.toLowerCase()) ? 
          true : 
            blogData.content.toLowerCase().includes(searchValue.toLowerCase()) ? 
            true : 
            false
        )
      }  
      else {
        return (blogData[filterValue.toLowerCase()].toLowerCase().includes(searchValue.toLowerCase()))
      }
    }
    else if( type === "books" ) {
      if(filterValue === "Any") {
        return(
          blogData.title.toLowerCase().includes(searchValue.toLowerCase()) ?
          true :
          false
        )
      } else {
        return (
          blogData.genre === filterValue.toLowerCase() 
            &&
          blogData.title.toLowerCase().includes(searchValue.toLowerCase()) 
        )
      }
    }
  })
  
  
  const startIndex = 5 * (selectedPage - 1)
  const endIndex = 5 * selectedPage - 1

  return(
    <>
      <ul className="blog-list">
        {filteredDatas.map((blogItem, index) => {
          if(startIndex <= index && index <= endIndex) {
            return (
              <li className="blog-item-wrapper" key={blogItem.id}>
                <div className="blog-item">
                  <div className="blog-title-group">
                    <p className="blog-title">
                      {blogItem.title}
                    </p>
                    <ion-icon name="chatbox-outline"></ion-icon>
                    <span className="comment-number">({blogItem.commentsNumber})</span>
                  </div>
                  <span className="blog-date">{blogItem.modifiedDate}</span>
                </div>
              </li>
            )
          }
        })}
      </ul>
      <Pagination 
        count={Math.ceil(filteredDatas.length / 5)} 
        color="primary" 
        size={windowWidth > 500 ? "large" : windowWidth > 380 ? "medium" : "small"}
        onChange={(_, page) => {setSelectedPage(page)}}
      />
    </>
  )
}