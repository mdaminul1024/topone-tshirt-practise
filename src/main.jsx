import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home';
import Header from './Header/Header';
import OrderReview from './OrderReview/OrderReview';
import Grandpa from './Grandpa/Grandpa';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Header></Header>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('tshirts.json')
        },
        {
          path: 'review',
          element: <OrderReview></OrderReview>
        },
        {
          path: '/grandpa',
          element: <Grandpa></Grandpa> 
        }
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
