import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Use HashRouter here
import "./index.css";
import App from "./App.jsx";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {" "}
    {/* Use HashRouter here instead of BrowserRouter */}
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);
