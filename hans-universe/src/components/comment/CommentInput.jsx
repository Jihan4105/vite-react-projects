import { useContext, useState } from "react"
import { UserContext } from "@contexts/UserContext"

export default function CommentInput() {
  const [commentText, setCommentText] = useState("")
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
          />
        </div>
        <div className="button-group">
          <button className="cancel-btn">Cancel</button>
          {commentText === "" ? 
            <button className="submit-btn" disabled>Submit</button>
            :
            <button className="submit-btn">Submit</button>
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