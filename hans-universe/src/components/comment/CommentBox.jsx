import { getUserById } from "@services/fetchUserDatas"
import CommentInput from "./CommentInput"

export default function CommentBox({ replyItem }) {
  const user = getUserById(replyItem.userId)

  return (
    <div className="comment-box">
      <div className="user-profile">
        <img src={user.userProfile} />
      </div>
      <div className="content-group">
        <div className="user-field">
          <span className="user-name">{user.userName}</span>
          <span className="date">{replyItem.date}</span>
        </div>
        <div className="text-field">
          {replyItem.content}
        </div>
        <button className="show-details-btn">
          Show details
        </button>
        <div className="reaction-field">
          <ion-icon name="thumbs-up-outline"></ion-icon>
          {replyItem.thumbsUp != 0 && <span className="thumbs-up-number">{replyItem.thumbsUp}</span>}
          <ion-icon name="thumbs-down-outline"></ion-icon>
          <button className="reply-btn">Reply</button>
        </div>
        <CommentInput />
      </div>
    </div>
  )
}