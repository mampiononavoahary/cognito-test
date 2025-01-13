// index.js
import { AuthProvider } from "react-oidc-context";
import ReactDOM from "react-dom/client";
import App from "./App";
import React from "react";

const cognitoAuthConfig = {
  authority: "https://cognito-idp.eu-west-3.amazonaws.com/eu-west-3_Wnov89saO",
  client_id: "1hv99qg1nd0sk2g8eca9fmi6rr",
  redirect_uri: "https://cognitovoaharystd22093",
  response_type: "code",
  scope: "phone openid email",
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// wrap the application with AuthProvider
root.render(
  <React.StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
