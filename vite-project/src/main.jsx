import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Auth0ProviderWithConfig from './auth0/auth.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0ProviderWithConfig />
  </StrictMode>
);