import { Pagination } from "@mui/material"

export default function BlogList() {
  return(
    <>
      <ul className="blog-list">
        <li className="blog-item-wrapper">
          <div className="blog-item">
            <div className="blog-title-group">
              <p className="blog-title">
                Lorem Ipsum
              </p>
              <ion-icon name="chatbox-outline"></ion-icon>
              <span className="comment-number">(5)</span>
            </div>
            <span className="blog-date">2020-04-05</span>
          </div>
        </li>
        <li className="blog-item-wrapper">
          <div className="blog-item">
            <div className="blog-title-group">
              <p className="blog-title">
                Lorem Ipsum
              </p>
              <ion-icon name="chatbox-outline"></ion-icon>
              <span className="comment-number">(5)</span>
            </div>
            <span className="blog-date">2020-04-05</span>
          </div>
        </li>
        <li className="blog-item-wrapper">
          <div className="blog-item">
            <div className="blog-title-group">
              <p className="blog-title">
                Lorem Ipsum
              </p>
              <ion-icon name="chatbox-outline"></ion-icon>
              <span className="comment-number">(5)</span>
            </div>
            <span className="blog-date">2020-04-05</span>
          </div>
        </li>
        <li className="blog-item-wrapper">
          <div className="blog-item">
            <div className="blog-title-group">
              <p className="blog-title">
                Lorem Ipsum
              </p>
              <ion-icon name="chatbox-outline"></ion-icon>
              <span className="comment-number">(5)</span>
            </div>
            <span className="blog-date">2020-04-05</span>
          </div>
        </li>
        <li className="blog-item-wrapper">
          <div className="blog-item">
            <div className="blog-title-group">
              <p className="blog-title">
                Lorem Ipsum
              </p>
              <ion-icon name="chatbox-outline"></ion-icon>
              <span className="comment-number">(5)</span>
            </div>
            <span className="blog-date">2020-04-05</span>
          </div>
        </li>
      </ul>
      <Pagination count={10} color="primary" />
    </>
  )
}