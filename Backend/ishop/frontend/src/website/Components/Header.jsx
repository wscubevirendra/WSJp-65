import React from 'react';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <div className="text-2xl font-bold">
                <Link to="/">E-Shop</Link>
            </div>
            <nav className="flex space-x-4">
                <Link to="/shop" className="hover:text-gray-400">Shop</Link>
                <Link to="/about" className="hover:text-gray-400">About</Link>
                <Link to="/contact" className="hover:text-gray-400">Contact</Link>
            </nav>
            <div className="flex space-x-4 items-center">
                <Link to="/cart" className="hover:text-gray-400">
                    <FaShoppingCart size={24} />
                </Link>
                <Link to="/profile" className="hover:text-gray-400">
                    <FaUserCircle size={24} />
                </Link>
            </div>
        </header>
    );
};

export default Header;