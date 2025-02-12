import { useState } from "react";
import { Routes, Route } from "react-router";

import LoginContents from '@components/login/contents/LoginContents'
import SignUpContents from '@components/login/contents/SignupConents'
import ForgotContents from '@components/login/contents/ForgotContents'

import App from '@pages/App'

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
import SingleBlog from "@components/singleblog/SingleBlog"

import AuthContext from "@contexts/AuthContext"

export default function IndexRoutes() {
  const [auth, setAuth] = useState({})

  return(
    <AuthContext.Provider value={{ auth, setAuth }}>
      <Routes>
        <Route index path='/' element={<LoginContents />}/>   
      
        <Route path='/signup' element={<SignUpContents />}/>   
        
        <Route path='/forgot' element={<ForgotContents />}/>  

        <Route path="/app" element={<App />}>
          <Route 
            index 
            path='landing'
            element={
              <>
                <Hero /> 
                
                <NewsLetter /> 
                
                <Contact />
              </>
            } />
          <Route
            path='skills'
            element={
              <>
                <Header 
                  key="skills-header"
                  type="skills"
                />

                <SkillsStacks />

                <Portfolio />
              </>
            } />
          <Route 
            path='workout'
            element={
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
          />
          <Route 
            path='books'
            element={
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
          />
          <Route 
            path='thoughts'
            element={
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
          />
          <Route 
            path='profile'
            element={
              <>
                <MottoSpace />
                
                <Introuduce />
              </>
            }
          />
          <Route 
            path='singleblog'
            element={
              <SingleBlog />
            }
          />
        </Route>

      </Routes>
    </AuthContext.Provider>
  )
}