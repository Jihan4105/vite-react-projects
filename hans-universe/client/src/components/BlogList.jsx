import { useContext, useEffect, useState } from "react"
import { Pagination } from "@mui/material"
import PropTypes from "prop-types"

import { WindowContext } from "@contexts/WindowContext"
import { JSXDispatchContext } from "@/contexts/JSXDispatchContext" 

import { initPageScroll } from "@utils/utils"

import { getBlogDatas } from "@services/fetchBlog"

BlogList.propTypes = {
  type: PropTypes.string.isRequired,
  searchValue: PropTypes.string.isRequired,
  filterValue: PropTypes.string.isRequired
}

export default function BlogList({ type, searchValue, filterValue}) {
  const [selectedPage, setSelectedPage] = useState("1")
  const [loading, setLoading] = useState(true)
  const [blogDatas, setBlogDatas] = useState({})
  const windowWidth = useContext(WindowContext)
  const JSXdispatch = useContext(JSXDispatchContext)
  let filteredDatas
  
  const fetchBlogDatas = async () => {
    const data = await getBlogDatas(type)
    setLoading(false)
    setBlogDatas(data)
  }
  
  useEffect(() => {
    fetchBlogDatas()
  }, [])

  if(!loading) {
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
    
  }
  
  const startIndex = 5 * (selectedPage - 1)
  const endIndex = 5 * selectedPage - 1

  if(loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    )
  }
  return(
    <>
      <ul className="blog-list">
        {filteredDatas.map((blogItem, index) => {
          if(startIndex <= index && index <= endIndex) {
            return (
              <li className="blog-item-wrapper" key={blogItem.id} onClick={() => {redirectBlogDetail(type, index, JSXdispatch)}}>
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

function redirectBlogDetail(type, index, JSXdispatch) {
  JSXdispatch({ 
    docType: "singleblog", 
    blogType: type,  
    blogIndex: index
  })

  initPageScroll();
}