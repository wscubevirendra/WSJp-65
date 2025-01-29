import React from 'react'

export default function TopSelling() {
    return (
        <div className='w-full h-[300px] bg-[#2E90E5] col-span-3'>
            <div className="grid grid-cols-3">
                <div className="col-span-2 p-10 text-white">
                    <h1 className='text-[42px] mb-4'>iPhone 8</h1>
                    <p>Performance and design. Taken right to the edge.</p>
                    <button className='border-b-4 mt-6 border-white'>SHOP NOW</button>
                </div>
                <div>
                    <img className='h-[300px]' src="banner.png" alt="" />
                </div>

            </div>
        </div>
    )
}
