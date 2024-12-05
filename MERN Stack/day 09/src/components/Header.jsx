import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img 
            src="https://d2kr1rbctelohj.cloudfront.net/images/wscube-tech-logo-2.svg" 
            alt="Logo" 
            width="50" 
            height="50"
            className="d-inline-block align-text-top"
          /> 
         
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery">Gallery</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  )
}
