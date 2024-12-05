import React from 'react'


export default function Contact() {
  return (
    <div>
       
        <div className="container my-5">
      <h1 className="text-center mb-4">Contact Us</h1>
      <p className="text-center mb-5">
        We'd love to hear from you! Feel free to reach out to us through the form below or via our contact details.
      </p>
      <div className="row">
        <div className="col-lg-6 mb-4">
          <h4>Contact Information</h4>
          <ul className="list-unstyled">
            <li>
              <strong>Address:</strong> 123 Main Street, City, Country
            </li>
            <li>
              <strong>Email:</strong> info@example.com
            </li>
            <li>
              <strong>Phone:</strong> +1 234 567 890
            </li>
          </ul>
        </div>
        <div className="col-lg-6">
          <h4>Send a Message</h4>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Your Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Write your message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  
    </div>
  )
}
