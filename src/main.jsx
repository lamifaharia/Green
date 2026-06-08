import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./index.css";
import { router } from "./routes/Router";
import AppProvider from "./providers/AppProvider";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />

      <Toaster position="top-right" />
    </AppProvider>
  </React.StrictMode>
);