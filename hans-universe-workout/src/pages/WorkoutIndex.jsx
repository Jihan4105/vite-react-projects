import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import WorkoutApp from './WorkoutApp.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('workout-root')).render(
  <StrictMode>
    <WorkoutApp />
  </StrictMode>,
)
