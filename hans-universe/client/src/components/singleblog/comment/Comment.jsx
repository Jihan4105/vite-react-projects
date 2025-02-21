import CommentInput from "./CommentInput"
import CommentWrapper from "./CommentWrapper"

export default function Comment({ blogType, blogItem, setBlogItem }) {

  console.log(blogItem)

  return(
    <section id="comment">
      <div className="container-jh">
        <h3 className="comment-number">{blogItem.commentsNumber} Comments</h3>
        <CommentInput 
          type="comment"
          blogType={blogType}
          blogItem={blogItem}
          setBlogItem={setBlogItem}
        />
        {
          blogItem.commentTree.map((commentItem, commentIndex) => {
            return(
              <CommentWrapper 
                key={`comment-${commentIndex}`}
                blogType={blogType}
                blogItem={blogItem}
                setBlogItem={setBlogItem}
                commentItem={commentItem}
                commentIndex={commentIndex}
              />
            )
          })
        }
      </div>
    </section>
  )
}