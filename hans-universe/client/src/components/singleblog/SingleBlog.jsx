import { useState, useEffect, useContext } from "react"

import { BlogItemContext } from "@contexts/BlogItemContext"

import SingleBlogContent from "./SingleBlogContent"
import Comment from "./comment/Comment"

import { getBlogItem } from "@services/fetchBlog"

export default function SingleBlog({ blogType, blogId }) {
  const [loading, setLoading] = useState(true)
  const [blogItem, setBlogItem] = useState({})


  const fetchBlogItem = async () => {
    const singleBlogItem = await getBlogItem(blogType, blogId)
    setLoading(false)
    setBlogItem(singleBlogItem)
  }
  useEffect(() => {
    fetchBlogItem()
  }, [])

  if(loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    )
  }
  return(
    <>
      <BlogItemContext.Provider value={blogItem}>
        <SingleBlogContent
          blogType={blogType}
        />
              
        <Comment 
          blogType={blogType}
          setBlogItem={setBlogItem}
        />
      </BlogItemContext.Provider>
    </>
  )
}