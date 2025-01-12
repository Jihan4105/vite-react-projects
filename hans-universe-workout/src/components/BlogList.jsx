import { Pagination } from "@mui/material"
import blogDatas from "../data/blogDatas" 

export default function BlogList() {
  return(
    <>
      <ul className="blog-list">
        {blogDatas.map((blogItem) => {
          return (
            <li className="blog-item-wrapper" key={blogItem.id}>
              <div className="blog-item">
                <div className="blog-title-group">
                  <p className="blog-title">
                    {blogItem.title}
                  </p>
                  <ion-icon name="chatbox-outline"></ion-icon>
                  <span className="comment-number">({blogItem.commentsNumber})</span>
                </div>
                <span className="blog-date">{blogItem.date}</span>
              </div>
            </li>
          )
        })}
        <Pagination 
          count={5} 
          color="primary" 
          size="large"
        />
      </ul>
    </>
  )
}