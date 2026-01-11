import { lazy } from 'react';
import RootLayout from '../components/layout/RootLayout';
import TestLoader from '../pages/TestLoader';

// Lazy load pages for better performance
const Home = lazy(() => import('../pages/Home'));
const CoffeeHub = lazy(() => import('../pages/CoffeeHub'));
const CoffeeProducts = lazy(() => import('../pages/CoffeeProducts'));
const About = lazy(() => import('../pages/About'));
const Basket = lazy(() => import('../pages/Basket'));
const Contact = lazy(() => import('../pages/Contact'));
const Error = lazy(() => import('../pages/Error'));

export const routes = [
  {
    path: '/test-loader',
    element: <TestLoader />
  },
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'coffee-hub',
        element: <CoffeeHub />,
      },
      {
        path: 'coffee-products',
        element: <CoffeeProducts />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'basket',
        element: <Basket />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]; 