import { useState, useRef, useEffect, useContext } from "react"
import { useLocation, useNavigate } from "react-router"
import Dropdown from "react-bootstrap/Dropdown"
import DropdownButton from "react-bootstrap/DropdownButton"

import { isEllipsisActive } from "@utils/utils"
import { deleteComment } from "@/services/fetchComment"
import CommentInput from "./CommentInput"
import CommentEditInput from "./CommentEditInput"

import UserContext from "@contexts/UserContext"

import useAxiosPrivate from "@hooks/useAxiosPrivate"

export default function CommentBox({ type, blogType, commentItem, commentIndex, isReplyExist, blogItem, setBlogItem, isExpandEnabled = undefined, setIsExpandEnabled = undefined }) {
  const logginedUser = useContext(UserContext)
  const textArea = useRef(null)
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState({})
  const [isShowDetailActivate, setIsShowDetailActivate] = useState(false) 
  const [isReplyBtnClicked, setIsReplyBtnClicked] = useState(false)
  const [isEditModeEnabled, setIsEditModeEnabled] = useState(false)
  const [isDetailBtnClicked, setIsDetailBtnClicked] = useState(false)
  const axiosPrivate = useAxiosPrivate()
  const navigate = useNavigate()
  const location = useLocation()

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
  }, [user])
  
  useEffect(() => {
    const controller = new AbortController()

    const getUser = async () => {
      try {
        const res = await axiosPrivate.post(`/user/getUserByFilter`, {
          filterType: "id",
          filterValue: commentItem.userId,
          signal: controller.signal
        })
        setUser(res.data.userData)
        setLoading(false)
      } catch(error) {
        console.log(error.message)
      }
    }

    getUser()

    return () => {
      controller.abort()
    }
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
      {isEditModeEnabled ?
        <CommentEditInput 
          type={type}
          blogType={blogType}
          blogItem={blogItem}
          setBlogItem={setBlogItem}
          setIsEditModeEnabled={setIsEditModeEnabled}
          previousComment={commentItem.content}
          commentId={commentItem._id}
          commentIndex={commentIndex}
        /> 
        :
        <>
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
            {(isShowDetailActivate || isDetailBtnClicked) &&   
              <>
                {!isDetailBtnClicked ? 
                  <button className="show-details-btn" onClick={(e) => { e.target.previousElementSibling.style.webkitLineClamp = "none"; setIsDetailBtnClicked(true) }}>
                    Show details
                  </button>
                :
                  <button className="hide-details-btn" onClick={(e) => {e.target.previousElementSibling.style.webkitLineClamp = 4; setIsDetailBtnClicked(false)}}>
                    Hide details
                  </button>
                }
              </>
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
                blogItem={blogItem}
                setBlogItem={setBlogItem}
                setIsReplyBtnClicked={setIsReplyBtnClicked}
                commentIndex={commentIndex}
              />
            }
            {commentItem.replyNumber != 0 && isReplyExist && 
              <div className="expand-replies">
                <button className="expand-replies-btn" onClick={() => { setIsExpandEnabled(!isExpandEnabled) }}>
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
                <Dropdown.Item eventKey="1" active={false} onClick={() => {deleteButtonHandler(navigate, location, axiosPrivate, type, blogType, blogItem, commentItem._id, commentIndex, setBlogItem)}}>
                  <div className="comment-Delete-group">
                    <ion-icon name="trash-outline"></ion-icon>
                    <span>Delete</span>
                  </div>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="2" onClick={() => {setIsEditModeEnabled(true)}}>
                  <div className="comment-edit-group">
                    <ion-icon name="create-outline"></ion-icon>
                    <span>Edit</span>
                  </div>
                </Dropdown.Item>
              </DropdownButton>
            </>
          }
        </>
      }
    </div>
  )
}

async function deleteButtonHandler(navigate, location, axiosPrivate, type, blogType, blogItem, commentId, commentIndex, setBlogItem) {
  const data = await deleteComment(navigate, location, axiosPrivate, type, blogType, blogItem, commentId, commentIndex)

  setBlogItem(data)
}