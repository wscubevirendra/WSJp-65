import React from 'react'

import MyCart from '../components/MyCart'
import Header from '../components/Header'

export default function About() {
  return (
    <>
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-6 mb-4">
          <img
            src="https://via.placeholder.com/500x300"
            alt="About Us"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="mb-4">About Us</h1>
          <p>
            Welcome to our website! We are passionate about delivering the best 
            services and products to our customers. Our team is dedicated to innovation, 
            quality, and creating meaningful experiences for everyone who interacts with us.
          </p>
          <p>
            With years of experience in the industry, we aim to meet and exceed your 
            expectations. We believe in fostering trust, reliability, and a commitment to excellence.
          </p>
          <p>
            Thank you for being a part of our journey. Together, let's create something amazing!
          </p>
        </div>
      </div>
    </div>

   
    </>
  )
}
