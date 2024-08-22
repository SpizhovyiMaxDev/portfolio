import React from "react";
import ReactDOM from "react-dom/client";
import { ScrollProvider } from "./context/AppContext.jsx";
import App from "./App.jsx";
import "./general.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ScrollProvider>
      <App />
    </ScrollProvider>
  </React.StrictMode>
);
