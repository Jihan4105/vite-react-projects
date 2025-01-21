import { useState, useRef, useEffect } from "react"

import { isEllipsisActive } from "@/utils/utils"
import { getUserById } from "@services/fetchUserDatas"
import CommentInput from "./CommentInput"

export default function CommentBox({ commentItem, isReplyExist = false }) {
  const user = getUserById(commentItem.userId)
  const textArea = useRef(null)
  const [isShowDetailActivate, setIsShowDetailActivate] = useState(false) 
  const [isReplyBtnClicked, setIsReplyBtnClicked] = useState(false)
  
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

  return (
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
          {commentItem.content}
        </div>
        {isShowDetailActivate && 
          <button className="show-details-btn">
            Show details
          </button>
        }
        <div className="reaction-field">
          <ion-icon name="thumbs-up-outline"></ion-icon>
          {commentItem.thumbsUp != 0 && 
            <span className="thumbs-up-number">{commentItem.thumbsUp}</span>
          }
          <ion-icon name="thumbs-down-outline"></ion-icon>
          {commentItem.thumbsDown != 0 && 
            <span className="thumbs-down-number">{commentItem.thumbsDown}</span>
          }
          <button className="reply-btn" onClick={() => {setIsReplyBtnClicked(true)}}>Reply</button>
        </div>
        {!isReplyBtnClicked && !isReplyExist && 
          <div className="spacing"></div>
        }
        {isReplyBtnClicked && 
          <CommentInput 
            type="reply"
            setIsReplyBtnClicked={setIsReplyBtnClicked}
          />
        }
        {commentItem.replyNumber != 0 && isReplyExist && 
          <div className="expand-replies">
            <button className="expand-replies-btn">
              <ion-icon name="chevron-down-outline"></ion-icon>
              {commentItem.replyNumber} Replies
            </button>
          </div>
        }
      </div>
    </div>
  )
}