import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import config from './amplifyconfiguration';
import { routes } from './Routes';
import { DataProvider } from './context/context';
import './index.css';

// Configure Amplify at the entry point
Amplify.configure(config);

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  </React.StrictMode>
);
