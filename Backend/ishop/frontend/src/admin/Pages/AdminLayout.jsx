import React from 'react'
import Header from '../Components/Header'
import SideMenu from '../Components/SideMenu'
import { Outlet } from 'react-router-dom'

export default function AdminLayout() {
    return (
        <div className='max-w-[1300px] h-[100vh]  grid grid-cols-6'>
            <div>
                <SideMenu />
            </div>
            <div className='col-span-5'>
                <Header />
                <div className='px-10 '>
                    <Outlet />
                </div>

            </div>

        </div>
    )
}
