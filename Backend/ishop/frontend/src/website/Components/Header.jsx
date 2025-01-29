import React from 'react';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaUserAlt, FaCartArrowDown } from "react-icons/fa";
import { useSelector } from 'react-redux';


const Header = () => {
    const cart = useSelector((state) => state.cart.data)
    console.log(cart)
    return (
        <header>
            <div className='bg-white shadow font-[700] gap-10 p-4 flex justify-end items-center '>
                <div className='flex items-center gap-4'>
                    <FaUserAlt />
                    My Profile

                </div>

                <Link className='flex items-center gap-4' to="/cart">
                    <FaCartArrowDown />
                    Items ({cart.length})
                </Link>



            </div>
            <h1 className='icons py-2'>iSHOP</h1>
            <nav>
                <ul className=' flex my-4 justify-center font-[600] gap-10 text-sm text-[#22262A] uppercase'>
                    <li>
                        Home
                    </li>
                    <li>
                        Store
                    </li>
                    <li>
                        iphone
                    </li>
                    <li>
                        ipad
                    </li>
                    <li>
                        macbook
                    </li>
                    <li>
                        ACCESORIES
                    </li>

                </ul>
            </nav>


        </header>
    );
};

export default Header;