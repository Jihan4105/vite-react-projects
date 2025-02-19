import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import LandingPage from '@pages/LandingPage'
import AppLayout from '@pages/AppLayout'

// CSS
import "../../node_modules/swiper/swiper.css"
import "@styles/main.scss"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        <Route element={<AppLayout />}>
          <Route index path='/' element={<LandingPage />}/>
        </Route>

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
