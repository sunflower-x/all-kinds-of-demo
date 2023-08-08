import App from "../App";
import Home from "../pages/home/index";
import About from "../pages/about/index";
import MyLayout from "../layout/index";
import Login from "../pages/login/index";

import { Navigate } from "react-router-dom";

const routes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/layout",
    element: <MyLayout />,
    children: [
      {
        path: "/layout/home",
        element: <Home />,
      },
      {
        path: "/layout/about",
        element: <About />,
      },
    ],
  },
  
];

export default routes;
