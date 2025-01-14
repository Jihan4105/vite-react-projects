import thoughtsContentImg from "../../assets/thoughts/thoughts-content.jpg"
import thoughtsBlogDatas from "../../data/thoughtsBlogDatas"

export default function ThoughtsContent() {
  const copiedBlogDatas = [...thoughtsBlogDatas]
  const sortedDatas = copiedBlogDatas.sort((itemPrevious, itemNext) => {
    return itemNext.commentsNumber - itemPrevious.commentsNumber
  })
  sortedDatas.splice(3, sortedDatas.length)

  return(
    <section id="thoughts-contents">
      <div className="container-jh">
        <div className="thoughts-img-box">
          <h4 className="motto">&quot;Thinking is the root of the self&quot;</h4>
          <img src={thoughtsContentImg} alt="bodyprofile" />
        </div>
        <article className="thoughts-article">
          <div className="article-title-box">
            <ion-icon name="cloud-outline"></ion-icon>
            <h2 className="article-title">Deep and Broad Thoughts</h2>
          </div>
          <p className="description">
            I really love the habit of thinking deeply and broadly. When I think about something like that, I find and organize areas I didn&apos;t even think about. Then, I feel my world has expanded. That&apos;s why I love this.
          </p>
          <div className="article-title-box">
          <ion-icon name="chatbubbles-outline"></ion-icon>
            <h2 className="article-title">The Most discussed topic</h2>
          </div>
          <ul className="article-list">
            {sortedDatas.map((item, index) => {
              return (
                <li className="article-list-item-wrapper" key={index}>
                  <div className="article-list-item">
                    <p className="article-list-title">
                      {item.title}
                    </p>
                    <div className="comment-group">
                      <ion-icon name="chatbox-outline"></ion-icon>
                      <span className="comment-number">{item.commentsNumber}</span>
                    </div>
                  </div>
                </li>
              )
            })}
            {/* <li className="article-list-item-wrapper" key={1}>
              <div className="article-list-item">
                <p className="article-list-title">
                  What makes Me
                </p>
                <div className="comment-group">
                  <ion-icon name="chatbox-outline"></ion-icon>
                  <span className="comment-number">20 Comments</span>
                </div>
              </div>
            </li>
            <li className="article-list-item-wrapper" key={2}>
              <div className="article-list-item">
                <p className="article-list-title">
                  What makes human continue their things
                </p>
                <div className="comment-group">
                  <ion-icon name="chatbox-outline"></ion-icon>
                  <span className="comment-number">15 Comments</span>
                </div>
              </div>
            </li>
            <li className="article-list-item-wrapper" key={3}>
              <div className="article-list-item">
                <p className="article-list-title">
                  Lorem Ipsum Lorem
                </p>
                <div className="comment-group">
                  <ion-icon name="chatbox-outline"></ion-icon>
                  <span className="comment-number">10 Comments</span>
                </div>
              </div>
            </li> */}
          </ul>
        </article>
      </div>
    </section>
  ) 
}