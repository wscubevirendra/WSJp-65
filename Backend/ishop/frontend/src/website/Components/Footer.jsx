import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaDribbble } from "react-icons/fa";

const links = [
  { title: 'Infomation', items: ['1on1 Coaching', 'Company Review', 'Accounts Review', 'HR Consulting', 'SEO Optimisation'] },
  { title: 'Service', items: ['About', 'Meet the Team', 'Accounts Review'] },
  { title: 'Extras', items: ['Contact', 'FAQs', 'Live Chat'] },
  { title: 'My Account', items: ['Accessibility', 'Returns Policy', 'Refund Policy', 'Hiring Statistics'] },
  { title: 'Userful Links', items: ['Accessibility', 'Returns Policy', 'Refund Policy', 'Hiring Statistics'] },
   { title: 'Our Offers', items: ['Accessibility', 'Returns Policy', 'Refund Policy', 'Hiring Statistics'] }
];

const socialLinks = [
  { icon: <FaFacebook />, label: 'Facebook', href: '#' },
  { icon: <FaInstagram />, label: 'Instagram', href: '#' },
  { icon: <FaTwitter />, label: 'Twitter', href: '#' },
  { icon: <FaGithub />, label: 'GitHub', href: '#' },
  { icon: <FaDribbble />, label: 'Dribbble', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-white mt-10 shadow-md border-t  container">
      <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="grid grid-cols-3 my-14 gap-20">
      <div>
        <h1 className="text-[#C1C8CE] text-3xl font-bold">ishop</h1>
        <p className="py-3 text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.
        </p>
      </div>
      <div>
        <h1 className="text-[#22262A] font-bold">Follow us</h1>
        <p className="py-3 text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <div className="flex space-x-4">
          {/* Facebook Icon */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4267B2] text-2xl"
          >
            <FaFacebook />
          </a>
          {/* Instagram Icon */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#E4405F] text-2xl"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
      <div>
        <h1 className="text-[#22262A] font-bold">Contact us</h1>
        <ul className="py-3 text-justify">
          <li>iShop: address @building 124</li>
          <li>Call us now: 0123-456-789</li>
          <li>Email: support@whatever.com</li>
        </ul>
      </div>
    </div>
        <div className="grid mx-auto grid-cols-6">
          {links.map((section, idx) => (
            <div key={idx} className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900">{section.title}</p>
              <ul className="mt-6 space-y-4 text-sm">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="grid border-t border-gray-300 grid-cols-2 py-4">
        <ul className="flex gap-6">
          {socialLinks.map((link, idx) => (
            <li key={idx}>
              <a href={link.href} rel="noreferrer" target="_blank" className="text-gray-700 transition hover:opacity-75" aria-label={link.label}>
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex justify-around">
          <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()}. Company Name. All rights reserved.</p>
          <ul className="flex flex-wrap gap-4 text-xs">
            <li><a href="#" className="text-gray-500 transition hover:opacity-75">Terms & Conditions</a></li>
            <li><a href="#" className="text-gray-500 transition hover:opacity-75">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-500 transition hover:opacity-75">Cookies</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
