import { useContext } from "react"
import { useNavigate, useLocation } from "react-router";

import UserContext from "@contexts/UserContext";
import { initPageScroll } from "@utils/utils"

import useAxiosPrivate from "@hooks/useAxiosPrivate";
import { likeHandler, hmmHandler, disagreeHandler } from "@services/fetchReaction";

export default function SingleBlogContent({ blogType, blogItem, setBlogItem }) {
  const user = useContext(UserContext)
  const navigate = useNavigate()
  const location = useLocation()
  const axiosPrivate = useAxiosPrivate()

  return(
    <section id="single-blog">
      <div className="icon-btn return-btn" title="Return to page" onClick={() => { navigate(`/app/${blogType}?userId=${user._id}`); initPageScroll();}}>
      <ion-icon name="return-down-back"></ion-icon>
      </div>
      <div className="container-jh">
        <h2 className="blog-title">{blogItem.title}</h2>
        <div className="date-box">
          <div className="wrote-date-group">
            Wrote
            <span className="wrote-date">{blogItem.wroteDate}</span>
          </div>
          <div className="modified-date-group">
            Modified
            <span className="modified-date">{blogItem.modifiedDate}</span>
          </div>
        </div>
        <div className="content-box">
          {blogItem.content}
        </div>
        <div className="reaction-box">
          <div className="likeit-group">
            {blogItem.reaction.likePersons.find((likePerson) => likePerson === user._id) ? 
              <div onClick={() => {likeButtonHandler(navigate, location, axiosPrivate, blogType, blogItem, user._id, setBlogItem)}}>
                <picture>
                  <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f970/512.webp" type="image/webp" />
                  <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f970/512.gif" alt="🥰" width="32" height="32" />
                </picture>
              </div>
              :
              <div className="likeit-emoji" onClick={() => {likeButtonHandler(navigate, location, axiosPrivate, blogType, blogItem, user._id, setBlogItem)}}>🥰</div>
            }
            <span>Like it!</span>
            <span>{blogItem.reaction.like}</span>
          </div>
          <div className="hmm-group">
            {blogItem.reaction.hmmPersons.find((hmmPerson) => hmmPerson === user._id) ? 
              <div onClick={() => {hmmButtonHandler(navigate, location, axiosPrivate, blogType, blogItem, user._id, setBlogItem)}}>
                <picture>
                  <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f914/512.webp" type="image/webp" />
                  <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f914/512.gif" alt="🤔" width="32" height="32" />
                </picture>
              </div>
              :
              <div className="hmm-emoji" onClick={() => {hmmButtonHandler(navigate, location, axiosPrivate, blogType, blogItem, user._id, setBlogItem)}}>🤔</div>
            }
            <span>Hmm..</span>
            <span>{blogItem.reaction.hmm}</span>
          </div>
          <div className="disagree-group">
            {blogItem.reaction.disagreePersons.find((disagreePerson) => disagreePerson === user._id) ?
              <div onClick={() => {disagreeButtonHandler(navigate, location, axiosPrivate, blogType, blogItem, user._id, setBlogItem)}}>
                <picture>
                  <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f612/512.webp" type="image/webp" />
                  <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f612/512.gif" alt="😒" width="32" height="32" />
                </picture>
              </div>
              :
              <div className="disagree-emoji" onClick={() => {disagreeButtonHandler(navigate, location, axiosPrivate, blogType, blogItem, user._id, setBlogItem)}}>😒</div>
            }
            <span>What?</span>
            <span>{blogItem.reaction.disagree}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

async function likeButtonHandler(navigate, location, axiosPrivate, blogType, blogItem, userId, setBlogItem) {
  const res = await likeHandler(navigate, location, axiosPrivate, blogType, blogItem, userId)

  setBlogItem(res)
}

async function hmmButtonHandler(navigate, location, axiosPrivate, blogType, blogItem, userId, setBlogItem) {
  const res = await hmmHandler(navigate, location, axiosPrivate, blogType, blogItem, userId)

  setBlogItem(res)
}

async function disagreeButtonHandler(navigate, location, axiosPrivate, blogType, blogItem, userId, setBlogItem) {
  const res = await disagreeHandler(navigate, location, axiosPrivate, blogType, blogItem, userId)

  setBlogItem(res)
}

