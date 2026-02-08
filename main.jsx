import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { PropertyProvider } from "./context/PropertyContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PropertyProvider>
      <RouterProvider router={router} />
    </PropertyProvider>
  </React.StrictMode>
);
