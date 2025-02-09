import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@pages/App.jsx'

// MyStyles
import "@styles/main.scss"
import { BrowserRouter, Routes, Route} from 'react-router'

createRoot(document.getElementById('app-root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
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
    </BrowserRouter>
  </StrictMode>,
)

