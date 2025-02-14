import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router"

import SingleBlogContent from "./SingleBlogContent"
import Comment from "./comment/Comment"

import { queryStringToObject } from "@utils/utils"
import useAxiosPrivate from "@/hooks/useAxiosPrivate"

export default function SingleBlog() {
  const [loading, setLoading] = useState(true)
  const [blogItem, setBlogItem] = useState({})
  const axiosPrivate = useAxiosPrivate()
  const navigate = useNavigate()
  const location = useLocation()
  const url = new URL(`${window.location.href}`)
  const queryObject = queryStringToObject(url)
  const { blogType, blogId } = queryObject

  useEffect(() => {
    const controller = new AbortController()

    const getBlogItem = async () => {
      try {
        const res = await axiosPrivate.post("/blog/getBlogItem", {
          blogType: blogType,
          blogId: blogId
        })
        setBlogItem(res.data)
        setLoading(false)
      } catch(error) {
        console.log(error.message)
        alert("Please Loginback, your refreshToken Expired")
        navigate("/", { state: { from: location }, replace: true})
      }
    }

    getBlogItem()

    return () => {
      controller.abort()
    }
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
        blogType={blogType}
        blogItem={blogItem}
        />
            
      <Comment 
        blogType={blogType}
        blogItem={blogItem}
        setBlogItem={setBlogItem}
      />
    </>
  )
}