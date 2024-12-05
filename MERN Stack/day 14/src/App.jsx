import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Register from './components/Register'
import Login from './components/Login'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import AddQuiz from './pages/AddQuiz'
import ViewQuiz from './pages/ViewQuiz'
import PlayQuiz from './pages/Play'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJCZiXvdKFrvTM2UXGbIUa4NxE9x59ZCA",
  authDomain: "wsjp-65.firebaseapp.com",
  databaseURL: "https://wsjp-65-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "wsjp-65",
  storageBucket: "wsjp-65.firebasestorage.app",
  messagingSenderId: "873493604532",
  appId: "1:873493604532:web:0a85853e527bdf1bd48fe1",
  measurementId: "G-ML2HMBQZG9"
};

// Initialize Firebase
const fireBaseapp = initializeApp(firebaseConfig);


export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/add-quiz",
          element: <AddQuiz />
        },
        {
          path: "/view-quiz",
          element: <ViewQuiz />
        }, {
          path: "/play",
          element: <PlayQuiz />
        }

      ]
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/login",
      element: <Login />
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}
