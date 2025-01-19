import { useContext, useState } from "react"
import { UserContext } from "@/contexts/UserContext"

export default function CommentInput() {
  const [commentText, setCommentText] = useState("")
  const user = useContext(UserContext)

  return(
    <div className="comment-box">
      <div className="user-profile-wrapper">
        <img src={user.userProfile} className="user-profile" />
      </div>
      <div className="input-group">
        <div className="input-wrapper">
          <textarea 
            id="comment-input" 
            name="comment-input" 
            value={commentText}
            onChange={(e) => {setCommentText(e.target.value)}}
            placeholder="Type your message"
          />
        </div>
        <div className="button-group">
          <button className="cancel-btn">Cancel</button>
          <button className="submit-btn">Submit</button>
        </div>
      </div>
    </div>
  )
}