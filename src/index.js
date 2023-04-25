import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { MainContext, ContentWrapper } from "./context/mainContext";

import App from "./App";
export { MainContext };
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <ContentWrapper>
        <App />
      </ContentWrapper>
    </Router>
  </StrictMode>
);
