import React from 'react'

export default function App() {
  return (
    <div className='max-w-[1200px] sha grid sm:grid-cols-2 md:grid-cols-4'>
      <div className=' border border-red-500'>
        <img className='w-full h-full' src="https://picsum.photos/200/200?random=1" />

      </div>
      <div className=' border border-red-500'>
        <img className='w-full h-full' src="https://picsum.photos/200/200?random=2" />

      </div>
      <div className=' border  border-red-500'>
        <img className='w-full h-full' src="https://picsum.photos/200/200?random=3" />

      </div>
      <div className=' border  border-red-500'>
        <img className='w-full h-full' src="https://picsum.photos/200/200?random=3" />

      </div>

    </div>
  )
}
