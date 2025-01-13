import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './components/Layout'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Setting from './components/Setting/Setting';
import Sales from './components/Sales/Sales';
import Purchase from './components/Purchase/Purchase';
import React from 'react'
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/setting",
        element: <Setting />
      },
      {
        path: "/sales",
        element: <Sales />
      },
      {
        path: "/purchase",
        element: <Purchase />
      },
      {
        path: "/transaction",
        element: <Setting />
      },
      {
        path: "/stock",
        element: <Setting />
      },
      {
        path: "/reports",
        element: <Setting />
      },
      {
        path: "/users",
        element: <Setting />
      },
    ]

  },
]);


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
