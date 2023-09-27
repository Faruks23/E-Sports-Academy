import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Component/Home/Home.jsx';
import Shop from './Component/Pages/Shop/Shop.jsx';
import Tournament from './Component/Pages/Tournament/Tournament.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path: "/Shop",
        element:<Shop></Shop>
      },
      {
        path: "/Tournament",
        element:<Tournament></Tournament>
      },
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path: "/",
        element:<Home></Home>
      }
    ]
  },
]);





ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
