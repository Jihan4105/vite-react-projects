import { useState,useEffect } from "react"

import SingleBlogContent from "./SingleBlogContent"
import Comment from "./comment/Comment"

import { getBlogItem } from "@services/fetchBlog"

export default function SingleBlog({ blogType, blogIndex }) {
  const [loading, setLoading] = useState(true)
  const [blogItem, setBlogItem] = useState({})

  const fetchBlogItem = async () => {
    const singleBlogItem = await getBlogItem(blogType, blogIndex)
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
      <SingleBlogContent
        blogItem={blogItem}
        blogType={blogType}
      />
            
      <Comment 
        blogItem={blogItem}
      />
    </>
  )
}