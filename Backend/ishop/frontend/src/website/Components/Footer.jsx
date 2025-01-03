import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div>
                        <h5 className="text-lg font-bold mb-2">About Us</h5>
                        <p className="text-sm">Learn more about our company and values.</p>
                    </div>
                    <div>
                        <h5 className="text-lg font-bold mb-2">Services</h5>
                        <p className="text-sm">Discover the services we offer to our customers.</p>
                    </div>
                    <div>
                        <h5 className="text-lg font-bold mb-2">Contact</h5>
                        <p className="text-sm">Get in touch with us for any queries or support.</p>
                    </div>
                    <div>
                        <h5 className="text-lg font-bold mb-2">Follow Us</h5>
                        <div className="flex justify-center">
                            <Link to="https://facebook.com" className="mx-2 text-xl">
                                <FaFacebook />
                            </Link>
                            <Link to="https://twitter.com" className="mx-2 text-xl">
                                <FaTwitter />
                            </Link>
                            <Link to="https://instagram.com" className="mx-2 text-xl">
                                <FaInstagram />
                            </Link>
                        </div>
                    </div>
                </div>
                <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;