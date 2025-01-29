import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { LuLayoutDashboard } from "react-icons/lu";
import { FaProductHunt } from "react-icons/fa6";
import { IoIosColorPalette } from "react-icons/io";
import { TbCategoryPlus, TbNumber7Small } from "react-icons/tb";
import { CiLogout } from "react-icons/ci";
import { useSelector, useDispatch } from 'react-redux';
import { login, lsToAdmin, logout } from '../../redux/reducers/adminSlice';





export default function SideMenu() {
    const admin = useSelector((state) => state.admin.data);
    const dispatcher = useDispatch()
    const location = useLocation()

    const navigate = useNavigate()

    function getAdmin() {
        const lsAdmin = localStorage.getItem("admin");
        if (lsAdmin) {
            const lsToken = localStorage.getItem("admin-token");
            const admiStamp = localStorage.getItem("adminTimeStamp");
            const currentTime = new Date().getTime()
            const rem = currentTime - admiStamp;
            if (rem > 3600000) {
                navigate("admin/login")
                dispatcher(logout())
                return { lsAdmin: null }
            } else {
                return { lsAdmin, lsToken }
            }
        } else {
            return { lsAdmin: null }
        }
    }

    useEffect(
        () => {
            const { lsAdmin, lsToken } = getAdmin();
            if (lsAdmin) {
                dispatcher(
                    lsToAdmin(
                        {
                            data: JSON.parse(lsAdmin),
                            token: lsToken
                        }
                    )
                )

            }

        },
        []  //first render
    )


    useEffect(
        () => {
            const {lsAdmin} = getAdmin();
            if (admin == null && lsAdmin == null) {
                navigate("/admin/login")
            }
        },
        [admin, location.pathname]
    )





    const menu = [
        {
            title: 'Dashboard',
            icon: <LuLayoutDashboard />,
            link: '/admin'
        },
        {
            title: 'Category',
            icon: <TbCategoryPlus />,
            link: '/admin/category'
        }, {
            title: 'Product',
            icon: <FaProductHunt />,
            link: '/admin/product'
        }, {
            title: 'Color',
            icon: <IoIosColorPalette />,
            link: '/admin/color'
        }
    ]
    return (
        <div className=' bg-[#111c43] h-[100%]'>
            <h1 className='w-full text-center border-b p-2 border-[#ffffff1a] text-white font-bold text-[30px]'>
                <span className='text-[#FF4252]'>i</span>SHOP
            </h1>
            <ul className='mt-10 flex flex-col gap-10 text-white text-[20px] '>
                {
                    menu.map((item, index) => (
                        <li key={index} className='flex hover:bg-[#1e2d63] items-center p-3 '>
                            <Link to={item.link} className='flex items-center gap-4'>
                                {item.icon}
                                <span >  {item.title}</span>
                            </Link>
                        </li>
                    ))
                }
                <li onClick={() => dispatcher(logout())} className='flex cursor-pointer hover:bg-[#1e2d63] items-center p-3 '>
                    <div className='flex items-center gap-4'>
                        <CiLogout />
                        <span >Logout</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}
