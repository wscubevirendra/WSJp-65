import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './website/Pages/Layout'
import Home from './website/Pages/Home'
import Profile from './website/Pages/Profile'
import Store from './website/Pages/Store'
import AdminLayout from './admin/Pages/AdminLayout'
import DashBoard from './admin/Pages/DashBoard'
import CategoryView from './admin/Pages/category/CategoryView'
import CategoryAdd from './admin/Pages/category/CategoryAdd'
import ProductView from './admin/Pages/product/ProductView'
import ProductAdd from './admin/Pages/product/ProductAdd'
import CategoryEdit from './admin/Pages/category/CategoryEdit'
import ColorView from './admin/Pages/color/ColorView'
import ColorAdd from './admin/Pages/color/ColorAdd'
import ColorEdit from './admin/Pages/color/ColorEdit'
import MultipleImages from './admin/Pages/product/MultipleImages'
import AdminLogin from './admin/Pages/AdminLogin'
import { useDispatch } from 'react-redux'
import { lsToCart } from './redux/reducers/cartSlice'
import Cart from './website/Pages/Cart'

export default function App() {
  const dispatched = useDispatch()

  useEffect(
    () => {
      dispatched(lsToCart())
    },
    []
  )

  const router = createBrowserRouter(
    [
      //Website Routes
      {
        path: '/',
        element: <Layout />,
        children: [
          {
            path: '/',
            element: <Home />
          },
          {
            path: "/profile",
            element: <Profile />
          },
          {
            path: '/store/:categorySlug?',
            element: <Store />
          },
          {
            path: "cart",
            element: <Cart />
          }
        ]
      },
      //Admin Routes
      {
        path: '/admin',
        element: <AdminLayout />,
        children: [
          {
            path: "/admin",
            element: <DashBoard />
          },
          {
            path: "category",
            element: <CategoryView />
          },
          {
            path: "category/add",
            element: <CategoryAdd />
          },
          {
            path: "color",
            element: <ColorView />

          },
          {
            path: "color/add",
            element: <ColorAdd />

          },
          {
            path: "color/edit/:colorId",
            element: <ColorEdit />
          },
          {
            path: "category/edit/:categoryId",
            element: <CategoryEdit />
          },
          {
            path: "product",
            element: <ProductView />
          },
          {
            path: "product/add",
            element: <ProductAdd />
          },
          {
            path: "product/multiple-image/:productId",
            element: <MultipleImages />
          }

        ]
      },
      {
        path: "/admin/login",
        element: <AdminLogin />
      }
    ]
  )
  return (
    <RouterProvider router={router} />
  )
}
