import React, { useContext } from 'react'
import { MainContext } from '../Context'
import { Link } from 'react-router-dom'


export default function Header() {
    const { user, logout } = useContext(MainContext)
    return (
        <div className='w-full  text-2xl flex items-center justify-between px-10 h-[70px] bg-white shadow-lg'>
            <div className=' text-fuchsia-900 font-semibold'>Quiz-App</div>
            <ul className='flex gap-16'>
                <li className=' cursor-pointer'>Home</li>
                {
                    user == null ?
                        <li className=' cursor-pointer'>
                            <Link to="/login">Login</Link>
                        </li>
                        :
                        <>
                            <li onClick={logout} className=' cursor-pointer'>Logout</li>
                            <li className=' cursor-pointer'>
                                <Link to="/add-quiz"> Add Quiz</Link>
                            </li>
                            <li className=' cursor-pointer'>
                                <Link to="/view-quiz">   View Quiz</Link>

                            </li> 
                            <li className=' cursor-pointer'>
                                <Link to="/play">Play</Link>

                            </li>
                        </>


                }



            </ul>
        </div>
    )
}
