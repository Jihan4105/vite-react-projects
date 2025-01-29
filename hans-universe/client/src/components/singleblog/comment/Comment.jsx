import { useEffect, useState } from "react"

import CommentInput from "./CommentInput"
import CommentBox from "./CommentBox"

export default function Comment({ blogItem }) {
  return(
    <section id="comment">
      <div className="container-jh">
        <h3 className="comment-number">{blogItem.commentsNumber} Comments</h3>
        <CommentInput 
          type="comment"
        />
        {
          blogItem.commentTree.map((commentItem, index) => {
            const [isExpandEnabled, setIsExpandEnabled] = useState(false)

            return(
              <div key={`comment-${index}`}>
                <CommentBox 
                  commentItem={commentItem}
                  isReplyExist={true}
                  isExpandEnabled={isExpandEnabled}
                  setIsExpandEnabled={setIsExpandEnabled}
                />
                {isExpandEnabled &&
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
                }
              </div>
            )
          })
        }
      </div>
    </section>
  )
}