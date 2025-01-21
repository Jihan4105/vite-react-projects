import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@pages/App.jsx'

// MyStyles
import "@styles/main.scss"


createRoot(document.getElementById('app-root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

