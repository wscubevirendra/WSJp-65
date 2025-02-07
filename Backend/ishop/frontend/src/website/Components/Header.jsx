import React from 'react';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaUserAlt, FaCartArrowDown } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/reducers/userSlice';
import { emptyCart } from '../../redux/reducers/cartSlice';


const Header = () => {
    const cart = useSelector((state) => state.cart.data);
    const user = useSelector((state) => state.user.data);
    const dispatched = useDispatch()

    return (
        <header>
            <div className='bg-white shadow font-[700] gap-10 p-4 flex justify-end items-center '>
                {
                    user == null ?
                        <Link to={`/login?ref=header`} className='flex items-center gap-4'>
                            Login
                        </Link>
                        :
                        <div className='flex items-center gap-4'>
                            <span className=' text-blue-600'>   Hii {user.name}</span>
                            <span onClick={() => {
                                dispatched(logout())
                                dispatched(emptyCart())
                            }} className='cursor-pointer '>Logout</span>
                        </div>

                }

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
                        <Link to="/store">
                            Store
                        </Link>

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