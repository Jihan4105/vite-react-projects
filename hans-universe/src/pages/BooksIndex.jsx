import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BooksApp from '@pages/BooksApp.jsx'

// MyStyles
import "@styles/main.scss"


createRoot(document.getElementById('books-root')).render(
  <StrictMode>
    <BooksApp />
  </StrictMode>,
)

