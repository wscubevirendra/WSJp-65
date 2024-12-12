import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MainContext } from '../Context'


export default function Header() {
    const { cart } = useContext(MainContext)
    return (
        <div className='flex gap-20 text-black font-bold border border-b-2 text-3xl px-10 w-full py-4 bg-white shadow-lg'>
            <div>
                <Link to="/cart">Cart:{cart.length}</Link>
            </div>
            <div>
                <Link to="/">Listing</Link>
            </div>
        </div>
    )
}
