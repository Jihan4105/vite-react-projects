import booksContentImg from "@assets/books/books-content.jpg"
import recommendFirstImg from "@assets/books/recommend-1.jpg"
import recommendSecondImg from "@assets/books/recommend-2.jpg"
import recommendThirdImg from "@assets/books/recommend-3.jpg"
import recommendFourthImg from "@assets/books/recommend-4.jpg"

export default function BooksContent() {
  return(
    <section id="books-contents">
      <div className="container-jh">
        <div className="books-img-box">
          <h4 className="motto">&quot;Books are the basis of thought&quot;</h4>
          <img src={booksContentImg} alt="bodyprofile" />
        </div>
        <article className="books-article">
          <div className="article-title-box">
            <ion-icon name="book-outline"></ion-icon>
            <h2 className="article-title">Reading Books</h2>
          </div>
          <p className="description">
            Born into a family that loves books from an early age and growing up in that environment, I have come to enjoy reading books regardless of genre. It gave me a habit of thinking.</p>
          <div className="article-title-box">
            <ion-icon name="thumbs-up-outline"></ion-icon>
            <h2 className="article-title">My recommended books</h2>
          </div>
          <div className="recommend-list">
            <div className="recommend-item">
              <img src={recommendFirstImg} alt="" />
            </div>
            <div className="recommend-item">
              <img src={recommendSecondImg} alt="" />
            </div>
            <div className="recommend-item">
              <img src={recommendThirdImg} alt="" />
            </div>
            <div className="recommend-item">
              <img src={recommendFourthImg} alt="" />
            </div>
          </div>
        </article>
      </div>
    </section>
  ) 
}