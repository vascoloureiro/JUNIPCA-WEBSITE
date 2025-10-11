import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Internal Components

// Web components MCK Edit
import 'mckedit-webcomponents/dist/webcomponent/index.esm.js';

// Styles
import './index.css';
import LandPageIndex from './LandPage/landpage_Index';
import Coockies from './LandPage/Geral/Coockies';
import InstitutionIPCA from './LandPage/InfoSection/Instituicao/Coockies';
import MissionJUNIPCA from './LandPage/InfoSection/Mission/MissionJUNIPCA';
import PoliticasJUNIPCA from './LandPage/InfoSection/Policies/PoliticasJUNIPCA';

const root = createRoot(document.querySelector('#root'));

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <LandPageIndex />,
  },
  {
    path: '/coockies',
    element: <Coockies />
  },
  {
    path: '/ipca',
    element: <InstitutionIPCA />
  },
  {
    path: '/mission',
    element: <MissionJUNIPCA />
  },
  {
    path: '/vision/values',
    element: <MissionJUNIPCA />
  },
    {
    path: '/policys',
    element: <PoliticasJUNIPCA />
  }


  
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
