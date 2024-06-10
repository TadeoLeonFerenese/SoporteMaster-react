import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { SoporteMasterApp } from "./SoporteMasterApp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <SoporteMasterApp />
    </BrowserRouter>
  </React.StrictMode>
);
