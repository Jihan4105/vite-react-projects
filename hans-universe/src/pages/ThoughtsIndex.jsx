import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ThoughtsApp from './ThoughtsApp.jsx'

// Bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css';

// MyStyles
import "../styles/main.scss"


createRoot(document.getElementById('thoughts-root')).render(
  <StrictMode>
    <ThoughtsApp />
  </StrictMode>,
)
