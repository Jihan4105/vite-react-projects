import { queryStringToObject, isEllipsisActive } from "@utils/utils"
import { getBlogItemByIndex } from "@services/fetchBlogItem"
import { getUserById } from "@services/fetchUserDatas"
import CommentInput from "./CommentInput"
import CommentBox from "./CommentBox"
import { useEffect, useRef, useState } from "react"

export default function Comment() {
  const url = new URL(`${window.location.href}`) 
  const { type, blogIndex } = queryStringToObject(url)
  const blogItem = getBlogItemByIndex(type, blogIndex)

  return(
    <section id="comment">
      <div className="container-jh">
        <h3 className="comment-number">{blogItem.commentsNumber} Comments</h3>
        <CommentInput />
        {
          blogItem.commentTree.map((commentItem, index) => {
            const user = getUserById(commentItem.userId)
            const textArea = useRef(null)
            const [isShowDetailActivate, setIsShowDetailActivate] = useState(false) 
            
            useEffect(() => {
              const observer = new ResizeObserver((entries) => {
                for (let entry of entries) {
                  const { width, height } = entry.contentRect;

                  if(isEllipsisActive(textArea.current)) {
                    setIsShowDetailActivate(true)
                  } else {
                    setIsShowDetailActivate(false)
                  }
                }
              });

              observer.observe(textArea.current)

              return () => {
                observer.unobserve(textArea.current)
              }
            }, [])

            return(
              <div key={`comment-${index}`}>
                <div className="comment-box">
                  <div className="user-profile">
                    <img src={user.userProfile} />
                  </div>
                  <div className="content-group">
                    <div className="user-field">
                      <span className="user-name">{user.userName}</span>
                      <span className="date">{commentItem.date}</span>
                    </div>
                    <div className="text-field" ref={textArea}>
                      {commentItem.content}ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    </div>
                    {isShowDetailActivate && 
                      <button className="show-details-btn">
                        Show details
                      </button>
                    }
                    <div className="reaction-field">
                      <ion-icon name="thumbs-up-outline"></ion-icon>
                      <span className="thumbs-up-number">{commentItem.thumbsUp}</span>
                      <ion-icon name="thumbs-down-outline"></ion-icon>
                      <button className="reply-btn">Reply</button>
                    </div>
                    <CommentInput />
                    {commentItem.replyNumber != 0 && 
                      <div className="expand-replies">
                        <button className="expand-replies-btn">
                          <ion-icon name="chevron-down-outline"></ion-icon>
                          {commentItem.replyNumber} Replies
                        </button>
                      </div>
                    }
                  </div>
                </div>
                <div className="replies-box">
                  {commentItem.replies.map((replyItem, index) => {
                    return(
                      <CommentBox 
                        key={index}
                        replyItem={replyItem}
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