import { JSX, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const App = (): JSX.Element => {
  return <></>;
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
