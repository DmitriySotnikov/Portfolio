import { createBrowserRouter } from "react-router-dom";
import React, { ReactNode } from "react";
import App from "../components/App";
import About from "../components/About";

interface IRoutes {
  path: string;
  element: ReactNode;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
] as IRoutes[]);

export default router;
