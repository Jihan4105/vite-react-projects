import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "../styles/index/indexStyle.scss"
import IndexApp from './IndexApp.jsx'


createRoot(document.getElementById('login-root')).render(
  <StrictMode>
    <IndexApp />
  </StrictMode>,
)
