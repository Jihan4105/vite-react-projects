import { useState } from "react"

import CommentBox from "./CommentBox"

export default function CommentWrapper({ blogType, blogItem, setBlogItem, commentItem, commentIndex}) {
  const [isExpandEnabled, setIsExpandEnabled] = useState(false)
              
  return(
    <div>
      <CommentBox 
        blogType={blogType}
        commentItem={commentItem}
        commentIndex={commentIndex}
        isReplyExist={true}
        blogItem={blogItem}
        setBlogItem={setBlogItem}
        isExpandEnabled={isExpandEnabled}
        setIsExpandEnabled={setIsExpandEnabled}
        />
      {isExpandEnabled &&
        <div className="replies-box">
          {commentItem.replies.map((replyItem, index) => {
            return(
              <CommentBox 
                key={index}
                blogType={blogType}
                commentItem={replyItem}
                commentIndex={commentIndex}
                isReplyExist={false}
                blogItem={blogItem}
                setBlogItem={setBlogItem}
              />
            )
          })}
        </div>
      }
    </div>
  )
}