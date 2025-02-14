import React, { StrictMode } from "react";
import { RouterProvider } from "react-router-dom";
import RootRoutes from "../routing";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/global.css";

const App = () => {
  return (
    <StrictMode>
      <RouterProvider router={RootRoutes} />
      <ToastContainer position="top-right" autoClose={3000} />
    </StrictMode>
  );
};

export default App;
