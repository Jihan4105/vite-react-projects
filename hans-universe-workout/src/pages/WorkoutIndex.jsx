import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import WorkoutApp from './WorkoutApp.jsx'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// MyStyles
import "../styles/workoutStyles.scss"

createRoot(document.getElementById('workout-root')).render(
  <StrictMode>
    <WorkoutApp />
  </StrictMode>,
)
