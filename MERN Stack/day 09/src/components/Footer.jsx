import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
    <div className="container text-center">
      <p>&copy; {new Date().getFullYear()} MyWebsite. All Rights Reserved.</p>
      <p>
        <a href="#privacy" className="text-white text-decoration-none me-3">
          Privacy Policy
        </a>
        <a href="#terms" className="text-white text-decoration-none">
          Terms of Service
        </a>
      </p>
    </div>
  </footer>
  )
}
