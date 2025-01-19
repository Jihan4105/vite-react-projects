import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SingleBlogApp from '@pages/SingleBlogApp.jsx'

// MyStyles
import "@styles/main.scss"

createRoot(document.getElementById('single-blog-root')).render(
  <StrictMode>
    <SingleBlogApp />
  </StrictMode>,
)
