import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import IndexApp from './IndexApp.jsx'

// Mystyles
import "../styles/main.scss"

createRoot(document.getElementById('login-root')).render(
  <StrictMode>
    <IndexApp />
  </StrictMode>,
)
