import React from 'react'
import Table from './Table'
import Form from './Form'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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
const myfireBase = initializeApp(firebaseConfig);

export default function App() {
  return (
    <div className='grid w-full grid-cols-6'>
      <div className=' col-span-4'>
        <Table />
      </div>
      <div className='col-span-2 '>
        <Form />
      </div>
    </div>
  )
}
