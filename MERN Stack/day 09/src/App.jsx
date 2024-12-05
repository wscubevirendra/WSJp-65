import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout'
import MyCart from './components/MyCart'

export default function App() {
  const router = createBrowserRouter(
    [
      {
        path:"/",
        element:<Layout/>,
        children:[
          {
            path: "/",
            element: <Home />
          },
          {
            path: "/about",
            element: <About />
          },
          {
            path: "/contact",
            element: <Contact />
          },
          {
            path: "/gallery",
            element: <MyCart/>
          }
        ]
      }
    ]
  )
  return (
    <RouterProvider router={router} />
  )
}
