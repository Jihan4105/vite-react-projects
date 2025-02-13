import { useState, useEffect } from "react"
import thoughtsContentImg from "@assets/thoughts/thoughts-content.jpg"

import useAxiosPrivate from "@/hooks/useAxiosPrivate"

export default function ThoughtsContent() {
  
  const [loading, setLoading] = useState(true)
  const [sortedDatas, setSortedDats] = useState([])
  const axiosPrivate = useAxiosPrivate()

  useEffect(() => {
    const controller = new AbortController()
    
    const getBlogDatas = async () => {
      try {
        const res = await axiosPrivate.post("/blog/getBlogDatas", {
          blogType: "thoughts",
          signal: controller.signal
        })
        const data = res.data

        setSortedDats(
          data.sort((itemPrevious, itemNext) => {
            return itemNext.commentsNumber - itemPrevious.commentsNumber
          }).slice(0, 3)
        )
        setLoading(false)
      } catch(error) {
        console.log(error.message)
      }
    }

    getBlogDatas()

    return () => {
      controller.abort()
    }
  }, [])


  if(loading) {
    return(
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    )
  } 

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
          </ul>
        </article>
      </div>
    </section>
  ) 
}