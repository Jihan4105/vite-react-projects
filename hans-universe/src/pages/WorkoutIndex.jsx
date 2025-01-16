import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import WorkoutApp from '@pages/WorkoutApp.jsx'

// MyStyles
import "@styles/main.scss"


createRoot(document.getElementById('workout-root')).render(
  <StrictMode>
    <WorkoutApp />
  </StrictMode>,
)

