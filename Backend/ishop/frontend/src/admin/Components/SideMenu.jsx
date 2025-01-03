import React from 'react'
import { Link } from 'react-router-dom'
import { LuLayoutDashboard } from "react-icons/lu";
import { FaProductHunt } from "react-icons/fa6";
import { IoIosColorPalette } from "react-icons/io";
import { TbCategoryPlus } from "react-icons/tb";
import { CiLogout } from "react-icons/ci";





export default function SideMenu() {
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
        }, {
            title: 'Logout',
            icon: <CiLogout />,
            link: '/admin/logout'
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
            </ul>
        </div>
    )
}
