import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import { BrowserRouter as Router } from "react-router-dom";
// check with this
import { HashRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Router basename="/portfolio"> */}
    <Router>
      <App />
    </Router>
  </StrictMode>
);
