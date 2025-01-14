import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LandingApp from './LandingApp.jsx'

// MyStyles
import "../styles/main.scss"


createRoot(document.getElementById('landing-root')).render(
  <StrictMode>
    <LandingApp />
  </StrictMode>,
)
