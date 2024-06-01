import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { AppThemeProvider } from "./context/AppThemeContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter basename="/Web-client-3sem">
      <AppThemeProvider>
        <App />
      </AppThemeProvider>
    </HashRouter>
  </React.StrictMode>,
);
