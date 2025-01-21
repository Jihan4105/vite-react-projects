import { queryStringToObject } from "@utils/utils"
import { getBlogItemByIndex } from "@services/fetchBlogItem"
import CommentInput from "./CommentInput"
import CommentBox from "./CommentBox"

export default function Comment() {
  const url = new URL(`${window.location.href}`) 
  const { type, blogIndex } = queryStringToObject(url)
  const blogItem = getBlogItemByIndex(type, blogIndex)

  return(
    <section id="comment">
      <div className="container-jh">
        <h3 className="comment-number">{blogItem.commentsNumber} Comments</h3>
        <CommentInput 
          type="comment"
        />
        {
          blogItem.commentTree.map((commentItem, index) => {
            return(
              <div key={`comment-${index}`}>
                <CommentBox 
                  commentItem={commentItem}
                  isReplyExist={true}
                />
                <div className="replies-box">
                  {commentItem.replies.map((replyItem, index) => {
                    return(
                      <CommentBox 
                        key={index}
                        commentItem={replyItem}
                        isReplyExist={false}
                      />
                    )
                  })}
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}