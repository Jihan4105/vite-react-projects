import { useContext, useState } from "react"

import CommentInput from "./CommentInput"
import CommentBox from "./CommentBox"
import { BlogItemContext } from "@/contexts/BlogItemContext"

export default function Comment({ blogType, setBlogItem }) {
  const blogItem = useContext(BlogItemContext)

  return(
    <section id="comment">
      <div className="container-jh">
        <h3 className="comment-number">{blogItem.commentsNumber} Comments</h3>
        <CommentInput 
          type="comment"
          blogType={blogType}
          setBlogItem={setBlogItem}
        />
        {
          blogItem.commentTree.map((commentItem, commentIndex) => {
            const [isExpandEnabled, setIsExpandEnabled] = useState(false)

            return(
              <div key={`comment-${commentIndex}`}>
                <CommentBox 
                  blogType={blogType}
                  commentItem={commentItem}
                  commentIndex={commentIndex}
                  isReplyExist={true}
                  setBlogItem={setBlogItem}
                  isExpandEnabled={isExpandEnabled}
                  setIsExpandEnabled={setIsExpandEnabled}
                />
                {isExpandEnabled &&
                  <div className="replies-box">
                    {commentItem.replies.map((replyItem, index) => {
                      return(
                        <CommentBox 
                          key={index}
                          blogType={blogType}
                          commentItem={replyItem}
                          commentIndex={commentIndex}
                          isReplyExist={false}
                          setBlogItem={setBlogItem}
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