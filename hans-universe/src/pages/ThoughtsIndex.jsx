import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ThoughtsApp from '@pages/ThoughtsApp.jsx'

// MyStyles
import "@styles/main.scss"


createRoot(document.getElementById('thoughts-root')).render(
  <StrictMode>
    <ThoughtsApp />
  </StrictMode>,
)
