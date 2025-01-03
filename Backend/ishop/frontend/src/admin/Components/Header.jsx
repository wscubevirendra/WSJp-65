import React from 'react'
import { IoIosSettings } from "react-icons/io";


export default function Header() {
  return (
    <div className='flex justify-between bg-white px-6 shadow-sm  mb-2 py-2'>
      <div>
        <div className='flex gap-2'>
          <h1 className='font-semibold text-[20px]'>Welcome Alex</h1>
          <img className='w-[30px]' src="https://admin.pixelstrap.net/riho/assets/images/hand.gif" alt="" />
        </div>
        <p>Here’s what’s happening with your store today.</p>
      </div>

      <div className='flex items-center gap-4'>
        <img className='w-[40px] h-[40px] rounded-full' src="https://codeigniter.spruko.com/tailwind/ynex/ynex/assets/images/faces/9.jpg" alt="" />
        <div className='text-[#536485]'>
          <h4 className=' font-bold'>John Doe</h4>
          <div className=' font-extralight mt-[-7px]'>Admin</div>
        </div>
        <IoIosSettings className='text-xl animate-spin duration-1000' />

      </div>
    </div>
  )
}
