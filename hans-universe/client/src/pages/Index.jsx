import { StrictMode } from 'react'
import axios from 'axios'
import { createRoot } from 'react-dom/client'
import AuthProvider from 'react-auth-kit'
import RequireAuth from '@auth-kit/react-router/RequireAuth'
import { BrowserRouter, Routes, Route } from 'react-router'

import createStore from 'react-auth-kit/createStore'
import createRefresh from 'react-auth-kit/createRefresh'

// Mystyles
import "@styles/main.scss"

import LoginContents from '@components/login/contents/LoginContents'
import SignUpContents from '@components/login/contents/SignupConents'
import ForgotContents from '@components/login/contents/ForgotContents'

import App from './App'

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


const refresh = createRefresh({
  interval: 10, // The time in sec to refresh the Access token,
  refreshApiCallback: async (param) => {
    try {
      const response = await axios.post("/refresh", param, {
        headers: {'Authorization': `Bearer ${param.authToken}`}
      })
      console.log("Refreshing")
      return {
        isSuccess: true,
        newAuthToken: response.data.token,
        newAuthTokenExpireIn: 10,
        newRefreshTokenExpiresIn: 60
      }
    }
    catch(error){
      console.error(error)
      return {
        isSuccess: false
      } 
    }
  }
})

const store = createStore({
  authName:'_auth',
  authType:'cookie',
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === 'https:',
  refresh: refresh
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider store={store}>
      <BrowserRouter>
        <Routes>

          <Route index path='/' element={<LoginContents />}/>   
        
          <Route path='/signup' element={<SignUpContents />}/>   
          
          <Route path='/forgot' element={<ForgotContents />}/>  

          <Route element={<RequireAuth fallbackPath='/' />}>
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
          </Route>

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
