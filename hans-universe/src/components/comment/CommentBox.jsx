import { useState, useRef, useEffect, useContext } from "react"
import Dropdown from "react-bootstrap/Dropdown"
import DropdownButton from "react-bootstrap/DropdownButton"

import { isEllipsisActive } from "@/utils/utils"
import { getUserById } from "@services/fetchUserDatas"
import CommentInput from "./CommentInput"

import { UserContext } from "@contexts/UserContext"

export default function CommentBox({ commentItem, isReplyExist = false, isExpandEnabled = undefined, setIsExpandEnabled = undefined }) {
  const logginedUser = useContext(UserContext)
  const user = getUserById(commentItem.userId)
  const textArea = useRef(null)
  const [isShowDetailActivate, setIsShowDetailActivate] = useState(false) 
  const [isReplyBtnClicked, setIsReplyBtnClicked] = useState(false)
  
  useEffect(() => {
    const textAreaDOM = textArea.current
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;

        if(isEllipsisActive(textAreaDOM)) {
          setIsShowDetailActivate(true)
        } else {
          setIsShowDetailActivate(false)
        }
      }
    });

    observer.observe(textAreaDOM)

    return () => {
      observer.unobserve(textAreaDOM)
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
          <div className="expand-replies" onClick={() => { setIsExpandEnabled(!isExpandEnabled) }}>
            <button className="expand-replies-btn">
              {isExpandEnabled ? 
                <ion-icon name="chevron-up-outline"></ion-icon>
                :
                <ion-icon name="chevron-down-outline"></ion-icon> 
              }
              {commentItem.replyNumber} Replies
            </button>
          </div>
        }
      </div>
      {logginedUser.id === user.id &&
        <>
          <DropdownButton
            id="comment-edit-dropdown-btn"
            drop="down"
            align="end"
            variant="transparent"
            title={
              <div className="icon-btn comment-edit-btn">
                <ion-icon name="ellipsis-vertical-outline"></ion-icon>
              </div>
            }
            size="112px"
          >
            <Dropdown.Item eventKey="1" active={false}>
              <div className="comment-Delete-group">
                <ion-icon name="trash-outline"></ion-icon>
                <span>Delete</span>
              </div>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="2">
              <div className="comment-edit-group">
                <ion-icon name="create-outline"></ion-icon>
                <span>Edit</span>
              </div>
            </Dropdown.Item>
          </DropdownButton>
        </>
      }
    </div>
  )
}