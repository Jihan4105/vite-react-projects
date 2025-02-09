import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AuthProvider from 'react-auth-kit'

import IndexApp from '@pages/IndexApp.jsx'
import createStore from 'react-auth-kit/createStore'
import createRefresh from 'react-auth-kit/createRefresh'

// Mystyles
import "@styles/main.scss"


const refresh = createRefresh({
  interval: 10, // The time in sec to refresh the Access token,
  refreshApiCallback: async (param) => {
    try {
      const response = await axios.post("/refresh", param, {
        headers: {'Authorization': `Bearer ${param.authToken}`}
      })
      console.log("Refreshing")
      return {
        isSuccess: true,
        newAuthToken: response.data.token,
        newAuthTokenExpireIn: 10,
        newRefreshTokenExpiresIn: 60
      }
    }
    catch(error){
      console.error(error)
      return {
        isSuccess: false
      } 
    }
  }
})

const store = createStore({
  authName:'_auth',
  authType:'cookie',
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === 'https:',
  refresh: refresh
})

createRoot(document.getElementById('login-root')).render(
  <StrictMode>
    <AuthProvider store={store}>
      <IndexApp />
    </AuthProvider>
  </StrictMode>,
)
