import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import WorkoutApp from '@pages/WorkoutApp.jsx'
// Bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css';

// MyStyles
import "@styles/main.scss"


createRoot(document.getElementById('workout-root')).render(
  <StrictMode>
    <WorkoutApp />
  </StrictMode>,
)

