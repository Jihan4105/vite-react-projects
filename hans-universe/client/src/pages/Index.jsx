import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AuthProvider from 'react-auth-kit'

import IndexApp from '@pages/IndexApp.jsx'
import createStore from 'react-auth-kit/createStore'

// Mystyles
import "@styles/main.scss"

const store = createStore({
  authName:'_auth',
  authType:'cookie',
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === 'https:'
})

createRoot(document.getElementById('login-root')).render(
  <StrictMode>
    <AuthProvider store={store}>
      <IndexApp />
    </AuthProvider>
  </StrictMode>,
)
