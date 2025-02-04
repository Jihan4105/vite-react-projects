import { useContext, useEffect, useRef, useState } from "react";

import { UserContext } from "@contexts/UserContext";

import { editComment } from "@/services/fetchComment";

import { getElement, getFormatedDate } from "@utils/utils";

export default function CommentEditInput({ blogType, blogItem, setBlogItem, setIsEditModeEnabled, previousComment, commentId}) {
  const user = useContext(UserContext)
  const [commentText, setCommentText] = useState(previousComment)

  useEffect(() => {
    const textAreaDOM = useRef(getElement(".edit-input"))
    
    textAreaDOM.focus()
  }, [])

  return(
    <div className="comment-input-box" style={{marginBottom: commentBoxMargin}}>
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
            <button className="submit-btn" onClick={() => {editCommentHandler(blogType, commentText, commentId, blogItem, setBlogItem, setIsEditModeEnabled)}}>Submit</button>
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

async function editCommentHandler(blogType, commentText, commentId, blogItem, setBlogItem, setIsEditModeEnabled) {
  const newDate = getFormatedDate(new Date())

  const data = await editComment(blogType, blogItem, commentText, commentId, newDate)
}