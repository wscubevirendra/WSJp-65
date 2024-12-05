import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Listing from './components/Listing'
import Details from './components/Details'

export default function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/:category_slug?",
        element: <Listing />
      },
      {
        path: "/details/:product_id?",
        element: <Details />
      }
    ]
  )

  return (
    <RouterProvider router={router} />
  )
}
