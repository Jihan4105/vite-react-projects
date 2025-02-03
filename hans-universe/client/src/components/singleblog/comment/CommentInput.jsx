import { useContext, useState } from "react"
import { UserContext } from "@contexts/UserContext"
import { createComment } from "@services/fetchComment"

export default function CommentInput({ type, setIsReplyBtnClicked = undefined }) {
  const [commentText, setCommentText] = useState("")
  const [focusStatus, setFocusStatus] = useState(false)
  const user = useContext(UserContext)
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
              <button className="submit-btn" onClick={() => {submitBtnHandler(type, user, commentText, index)}}>Submit</button>
            }
          </div>
        }
        {type === "reply" &&
          <div className="button-group">
            {setIsReplyBtnClicked && <button className="cancel-btn" onClick={(e) => {setIsReplyBtnClicked(false)}}>Cancel</button>}
            {commentText === "" ? 
              <button className="submit-btn" disabled>Submit</button>
              :
              <button className="submit-btn">Submit</button>
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

async function submitBtnHandler(type, user, commentText, index) {
  if(type === "comment") {
    const data = await createComment(type, user, commentText, index)
  }
}