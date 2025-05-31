import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createInstance } from "plausible-tracker";
// Initialize Plausible
try {
  const plausible = createInstance({
    domain: 'love-quinn.github.io',
    trackLocalhost: false,
    apiHost: 'https://plausible.io'
  });
  
  // Enable auto pageview tracking
  plausible.enableAutoPageviews();
  
  // Optional: Enable outbound link tracking
  // plausible.enableAutoOutboundTracking();
} catch (error) {
  console.error('Failed to initialize Plausible:', error);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
