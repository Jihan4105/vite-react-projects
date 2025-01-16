import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SkillsApp from '@pages/SkillsApp.jsx'

// MyStyles
import "@styles/main.scss"

createRoot(document.getElementById('skills-root')).render(
  <StrictMode>
    <SkillsApp />
  </StrictMode>,
)
