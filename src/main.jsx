import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

// ROUTES
import Root from './routes/Root'
import Home from './routes/Home';
import About from './routes/About';
import Dogs from './routes/Dogs';
import Cats from './routes/Cats';
import CatInfo from './routes/CatInfo';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "dogs",
        element: <Dogs/>
      },
      {
        path: "cats",
        element: <Cats/>
      },
      {
        path: "cats/:catId",
        element: <CatInfo/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
