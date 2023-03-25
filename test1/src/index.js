import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import Error_Boundary from "./error_bounddry";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Error_Boundary>
      <App />
    </Error_Boundary>
  </React.StrictMode>
);
