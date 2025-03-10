import { useContext, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router"
import { Pagination } from "@mui/material"

import WindowContext from "@contexts/WindowContext" 
import UserContext from "@contexts/UserContext"

import { initPageScroll } from "@utils/utils"

import useAxiosPrivate from "@hooks/useAxiosPrivate"

export default function BlogList({ type, searchValue, filterValue}) {
  const [selectedPage, setSelectedPage] = useState("1")
  const [loading, setLoading] = useState(true)
  const [blogDatas, setBlogDatas] = useState({})
  const windowWidth = useContext(WindowContext)
  const user = useContext(UserContext)
  const axiosPrivate = useAxiosPrivate()
  const navigate = useNavigate()
  const location = useLocation()
  let filteredDatas

  useEffect(() => {
    const controller = new AbortController()

    const getBlogDatas = async () => {
      try {
        const res = await axiosPrivate.post("/blog/getBlogDatas", {
          blogType: type,
          signal: controller.signal
        })
        setBlogDatas(res.data)
        setLoading(false)
      } catch(error) {
        alert("Please Loginback, your refreshToken Expired")
        navigate("/", { state: { from: location }, replace: true})
      }
    }

    getBlogDatas()

    return () => {
      controller.abort()
    }
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
              <li className="blog-item-wrapper" key={blogItem._id} onClick={() => {navigate(`/app/singleblog?userId=${user._id}&blogType=${type}&blogId=${blogItem._id}`); initPageScroll()}}>
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