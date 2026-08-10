import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/global.css";

import App from "./App";

import { ActiveSectionProvider } from "./context/ActiveSectionContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ActiveSectionProvider>
      <App />
    </ActiveSectionProvider>
  </StrictMode>
);