import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'

// Mystyles
import "@styles/main.scss"
import IndexRoutes from '@/routes/IndexRoutes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <IndexRoutes />
    </BrowserRouter>
  </StrictMode>
)
