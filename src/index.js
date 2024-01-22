import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import LoginHome from './components/Home/LoginHome';
import CPortal from './components/CPortal/CPortal';
import PPortal from './components/PPortal/PPortal';
import Settings from './components/Settings/Settings';
import Dashboard from './components/Dashboard/Dashboard';
import Asset from './components/Asset/Asset';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faUser, faGear } from '@fortawesome/free-solid-svg-icons'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

library.add(fab, faUser, faGear)

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "/login/home",
    element: <LoginHome />
  },
  {
    path: "/settings",
    element: <Settings />
  },
  {
    path: "/consumer",
    element: <CPortal />
  },
  {
    path: "/provider",
    element: <PPortal />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "/assets",
    element: <Asset />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
