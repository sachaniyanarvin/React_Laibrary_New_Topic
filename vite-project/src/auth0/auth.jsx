import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";

const Auth0ProviderWithConfig = () => {
  const domain = "dev-sen0qlqhqb4476s5.us.auth0.com";
  const clientId = "W1aXypIFEykeqcoHvwT0ZR3ca7UZvDgU";

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  );
};

export default Auth0ProviderWithConfig;