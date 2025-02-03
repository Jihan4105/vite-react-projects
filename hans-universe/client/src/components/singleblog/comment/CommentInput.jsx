import { useContext, useState } from "react"
import { UserContext } from "@contexts/UserContext"
import { BlogItemContext } from "@contexts/BlogItemContext"
import { createComment } from "@services/fetchComment"

import { getFormatedDate } from "@utils/utils.js"

export default function CommentInput({ type, blogType, setBlogItem, setIsReplyBtnClicked = undefined, commentIndex = undefined }) {
  const [commentText, setCommentText] = useState("")
  const [focusStatus, setFocusStatus] = useState(false)
  const user = useContext(UserContext)
  const blogItem = useContext(BlogItemContext)
  let commentBoxMargin = type === "comment" ? "1rem" : "0"

  return(
    <div className="comment-input-box" style={{marginBottom: commentBoxMargin}}>
      <div className="user-profile-wrapper">
        <img src={user.userProfile} className="user-profile" />
      </div>
      <div className="input-group">
        <div className="input-wrapper">
          <textarea 
            // id="comment-input" 
            // name="comment-input" 
            value={commentText}
            onChange={(e) => {
              autoHeight(e.target)
              setCommentText(e.target.value); 
            }}
            onFocus={(e) => setFocusStatus(true)}
            placeholder="Add a comment..."
          />
        </div>
        {type === "comment" && focusStatus && 
          <div className="button-group">
            <button className="cancel-btn" onClick={(e) => {cancelBtnHandler(e.target.parentElement.previousElementSibling.children[0], setCommentText, setFocusStatus)}}>Cancel</button>
            {commentText === "" ? 
              <button className="submit-btn" disabled>Submit</button>
              :
              <button className="submit-btn" onClick={() => {submitBtnHandler(type, blogType, user, commentText, blogItem, setBlogItem)}}>Submit</button>
            }
          </div>
        }
        {type === "reply" &&
          <div className="button-group">
            {setIsReplyBtnClicked && <button className="cancel-btn" onClick={(e) => {setIsReplyBtnClicked(false)}}>Cancel</button>}
            {commentText === "" ? 
              <button className="submit-btn" disabled>Submit</button>
              :
              <button className="submit-btn" onClick={() => {submitBtnHandler(type, blogType, user, commentText, blogItem, setBlogItem, commentIndex)}}>Submit</button>
            }
          </div>
        }
      </div>
    </div>
  )
}

function autoHeight(element) {
  element.style.height = "5px";
  element.style.height = (element.scrollHeight) + "px"
}

function cancelBtnHandler(textArea, setCommentText, setFocusStatus) {
  textArea.value = ""
  setCommentText("")
  setFocusStatus(false)
}

async function submitBtnHandler(type, blogType, user, commentText, blogItem, setBlogItem, commentIndex = undefined) {
  let newComment = {
    userId: user._id,
    date: getFormatedDate(new Date()),
    content: commentText,
    thumbsUp: 0,
    thumbsDown: 0
  }

  if(type === "comment") {
    newComment.replyNumber = 0
    newComment.replies = []
  }

  const newBlogItem = await createComment(blogType, blogItem, newComment, commentIndex)

  setBlogItem(newBlogItem)
}