import { queryStringToObject } from "@utils/utils"
import { getBlogItemByIndex } from "@services/fetchBlogItem"
import CommentInput from "./CommentInput"

export default function Comment() {
  const url = new URL(`${window.location.href}`) 
  const { type, blogIndex } = queryStringToObject(url)
  const blogItem = getBlogItemByIndex(type, blogIndex)

  return(
    <section id="comment">
      <div className="container-jh">
        <h3 className="comment-number">{blogItem.commentsNumber} Comments</h3>
      </div>
      <CommentInput />
      
    </section>
  )
}