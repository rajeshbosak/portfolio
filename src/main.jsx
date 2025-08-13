import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import { BrowserRouter as Router } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Router basename="/portfolio"> */} {/* this is with BrowserRouter */}
    <Router>
      <App />
    </Router>
  </StrictMode>
);
