import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Internal Components

// Web components MCK Edit
import 'mckedit-webcomponents/dist/webcomponent/index.esm.js';

// Styles
import './index.css';
import LandPageIndex from './LandPage/landpage_Index';

const root = createRoot(document.querySelector('#root'));

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <LandPageIndex />,
  },
 
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
