import { useContext, useEffect, useState } from "react"

import { getBlogItem } from "@/services/fetchBlog"
import { JSXDispatchContext } from "@contexts/JSXDispatchContext"
import { initPageScroll } from "@utils/utils"

export default function SingleBlog({ blogType, blogIndex }) {
  const JSXdispatch = useContext(JSXDispatchContext)
  const [loading, setLoading] = useState(true)
  const [blogItem, setBlogItem] = useState({})

  const fetchBlogItem = async () => {
    const singleBlogItem = await getBlogItem(blogType, blogIndex)
    console.log(singleBlogItem)
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
    <section id="single-blog">
      <div className="icon-btn return-btn" title="Return to page" onClick={() => {JSXdispatch({ docType: blogType }); initPageScroll();}}>
        <ion-icon name="return-down-back-outline"></ion-icon>
      </div>
      <div className="container-jh">
        <h2 className="blog-title">{blogItem.title}</h2>
        <div className="date-box">
          <div className="wrote-date-group">
            Wrote
            <span className="wrote-date">{blogItem.wroteDate}</span>
          </div>
          <div className="modified-date-group">
            Modified
            <span className="modified-date">{blogItem.modifiedDate}</span>
          </div>
        </div>
        <div className="content-box">
          {blogItem.content}
        </div>
        <div className="reaction-box">
          <div className="likeit-group">
            <div className="likeit-emoji">🥰</div>
            <span>Like it!</span>
            <span>{blogItem.reaction.like}</span>
          </div>
          <div className="hmm-group">
            <div className="hmm-emoji">🤔</div>
            <span>Hmm..</span>
            <span>{blogItem.reaction.hmm}</span>
          </div>
          <div className="disagree-group">
            <div className="disagree-emoji">😒</div>
            <span>What?</span>
            <span>{blogItem.reaction.disagree}</span>
          </div>
        </div>
      </div>
    </section>
  )
}