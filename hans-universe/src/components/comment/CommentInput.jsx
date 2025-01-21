import { useContext, useState } from "react"
import { UserContext } from "@contexts/UserContext"

export default function CommentInput({ type, setIsReplyBtnClicked = undefined }) {
  const [commentText, setCommentText] = useState("")
  const [focusStatus, setFocusStatus] = useState(false)
  const user = useContext(UserContext)

  return(
    <div className="comment-input-box">
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
            <button className="cancel-btn" onClick={() => {setFocusStatus(false)}}>Cancel</button>
            {commentText === "" ? 
              <button className="submit-btn" disabled>Submit</button>
              :
              <button className="submit-btn">Submit</button>
            }
          </div>
        }
        {type === "reply" &&
          <div className="button-group">
            {setIsReplyBtnClicked && <button className="cancel-btn" onClick={() => {setIsReplyBtnClicked(false)}}>Cancel</button>}
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