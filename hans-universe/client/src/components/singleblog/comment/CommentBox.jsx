import { useState, useRef, useEffect, useContext } from "react"
import Dropdown from "react-bootstrap/Dropdown"
import DropdownButton from "react-bootstrap/DropdownButton"

import { isEllipsisActive } from "@utils/utils"
import { getUserByFilter } from "@services/fetchUserDatas"
import CommentInput from "./CommentInput"

import { UserContext } from "@contexts/UserContext"

export default function CommentBox({ blogType, commentItem, commentIndex, isReplyExist, setBlogItem, isExpandEnabled = undefined, setIsExpandEnabled = undefined }) {
  const logginedUser = useContext(UserContext)
  const textArea = useRef(null)
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState({})
  const [isShowDetailActivate, setIsShowDetailActivate] = useState(false) 
  const [isReplyBtnClicked, setIsReplyBtnClicked] = useState(false)

  const getUser = async () => {
    const data = await getUserByFilter("id", commentItem.userId)
    setLoading(false)
    setUser(data.userData)
  }
  
  useEffect(() => {
    if(loading === false) {
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
    }
  }, [])

  useEffect(() => {
    getUser()
  }, [])

  if(loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    )
  }

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
            blogType={blogType}
            setBlogItem={setBlogItem}
            setIsReplyBtnClicked={setIsReplyBtnClicked}
            commentIndex={commentIndex}
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
      {logginedUser._id === user._id &&
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