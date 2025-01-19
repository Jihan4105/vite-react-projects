import { queryStringToObject } from "@utils/utils"
import { getBlogItemByIndex } from "@services/fetchBlogItem"

export default function SingleBlog() {
  const url = new URL(`${window.location.href}`) 
  const { type, blogIndex } = queryStringToObject(url)
  const blogItem = getBlogItemByIndex(type, blogIndex)

  return(
    <section id="single-blog">
      <div className="icon-btn return-btn">
        <ion-icon name="return-down-back-outline"></ion-icon>
      </div>
      <div className="container-jh">
        <h2 className="blog-title">{blogItem.title}</h2>
        <div className="date-box">
          <div className="wrote-date-group">
            Wrote:
            <span className="wrote-date">{blogItem.wroteDate}</span>
          </div>
          <div className="modified-date-group">
            Modified:
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