import { useContext, useEffect, useState } from "react";

import UserContext from "@contexts/UserContext";

import { editComment } from "@/services/fetchComment";
import useAxiosPrivate from "@hooks/useAxiosPrivate";

import { getElement, getFormatedDate } from "@utils/utils";
import { useLocation, useNavigate } from "react-router";

export default function CommentEditInput({ type, blogType, blogItem, setBlogItem, setIsEditModeEnabled, previousComment, commentId, commentIndex}) {
  const user = useContext(UserContext)
  const [commentText, setCommentText] = useState(previousComment)
  const axiosPrivate = useAxiosPrivate()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const textAreaDOM = getElement(".edit-input")
    
    textAreaDOM.focus()
  }, [])

  return(
    <div className="comment-input-box edit-input-box">
      <div className="user-profile-wrapper">
        <img src={user.userProfile} className="user-profile" />
      </div>
      <div className="input-group">
        <div className="input-wrapper">
          <textarea 
            className="edit-input"
            value={commentText}
            onChange={(e) => {
              autoHeight(e.target)
              setCommentText(e.target.value); 
            }}
            placeholder="Add a comment..."
          />
        </div>
        <div className="button-group">
          <button className="cancel-btn" onClick={(e) => {setIsEditModeEnabled(false)}}>Cancel</button>
          {commentText === "" ? 
            <button className="submit-btn" disabled>Submit</button>
            :
            <button className="submit-btn" onClick={() => {editCommentHandler(navigate, location, axiosPrivate, type, blogType, commentText, commentId, commentIndex, blogItem, setBlogItem, setIsEditModeEnabled)}}>Submit</button>
          }
        </div>
      </div>
    </div>
  )
}

function autoHeight(element) {
  element.style.height = "5px";
  element.style.height = (element.scrollHeight) + "px"
}

async function editCommentHandler(navigate, location, axiosPrivate, type, blogType, commentText, commentId, commentIndex, blogItem, setBlogItem, setIsEditModeEnabled) {
  const newDate = getFormatedDate(new Date())

  const data = await editComment(navigate, location, axiosPrivate, type, blogType, blogItem, commentText, commentId, commentIndex, newDate)
  
  setBlogItem(data)
  setIsEditModeEnabled(false)
}