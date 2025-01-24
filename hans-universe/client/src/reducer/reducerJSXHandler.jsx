// Common Componenets
import Header from "@components/Header" 
import Blog from "@components/Blog"

// Landing Components
import Hero from "@components/landing/Hero"
import NewsLetter from "@components/landing/NewsLetter"
import Contact from "@components/landing/Contact"

// Skills Components
import SkillsStacks from "@components/skills/SkillsStacks"
import Portfolio from "@components/skills/Portfolio"

// Workout Components
import WorkoutContents from "@components/workout/WorkoutContents.jsx"

// Books Components
import BooksContent from "@components/books/BooksContent"

// Thoughts Components
import ThoughtsContent from "@components/thoughts/ThoughtsContent"

// Profile Components
import MottoSpace from "@components/profile/MottoSpace"
import Introuduce from "@components/profile/Introduce"

// SingleBlog Components
import SingleBlog from "@components/SingleBlog"
import Comment from "@components/comment/Comment"


export default function reducerJSXHandler(_, action) {
  switch(action.docType) {
    case "landing" : {
      return {
        jsx : 
          <>
            <Hero /> 

            <NewsLetter /> 
            
            <Contact />
          </>
      }
    }
    case "skills" : {
      return {
        jsx :
          <>
            <Header 
              key="skills-header"
              type="skills"
            />

            <SkillsStacks />

            <Portfolio />
          </>
      }
    }
    case "workout" : {
      return {
        jsx : 
          <>
            <Header 
              key="workout-header"
              type="workout"
            />

            <WorkoutContents />

            <Blog 
              key="workout-blog"
              type="workout"
              dropdownItems={["Title", "Content", "Title + Content"]}
            />
          </>
      }
    }
    case "books" : {
      return {
        jsx :
          <>
            <Header 
              key="books-header"
              type="books"
            />

            <BooksContent />

            <Blog 
              key="books-blog"
              type="books"
              dropdownItems={["Any", "Novel", "Humanities", "Philosophy"]}
            />
          </>
      }
    }
    case "thoughts" : {
      return {
        jsx :
          <>
            <Header 
              key="thoughts-header"
              type="thoughts"
            />

            <ThoughtsContent />

            <Blog 
              key="thoughts-blog"
              type="thoughts"
              dropdownItems={["Title", "Content", "Title + Content"]}
            />
          </>
      }
    }
    case "profile" : {
      return {
        jsx: 
          <>
            <MottoSpace />

            <Introuduce />
          </>
      }
    }
    case "singleblog" : {
      return {
        jsx: 
          <>
            <SingleBlog
              blogType={action.blogType}
              blogIndex={action.blogIndex}
            />
                  
            <Comment 
              blogType={action.blogType}
              blogIndex={action.blogIndex}
            />
          </>,
      }
    }
  }
}