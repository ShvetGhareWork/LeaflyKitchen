import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Use HashRouter here
import "./index.css";
import ShopContextProvider from "./context/ShopContext.jsx";
import App from "./App.jsx";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ShopContextProvider>
      {" "}
      {/* Use HashRouter here instead of BrowserRouter */}
      <StrictMode>
        <App />
      </StrictMode>
    </ShopContextProvider>
  </BrowserRouter>
);
