import React, { useContext, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { MainContext } from '../Context';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [err, setErr] = useState("")
    const { login } = useContext(MainContext)
    const navigate = useNavigate()



    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const auth = getAuth();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Account created successfully
                toast.success("Account created successfully!");
                const user = userCredential.user;
                login(user.toJSON());
                setTimeout(
                    () => {
                        navigate("/");

                    }, 2000
                )
            })
            .catch((error) => {
                const errorMessage = error.message;
                setErr(errorMessage);
                toast.error(errorMessage); // Display error message as a toast
            });
    };


    return (
        <>
            <ToastContainer />
            <div className="flex items-center justify-center min-h-screen bg-gray-100">

                <div className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
                    <h4 className='text-center text-red-500'>{err}</h4>
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Register</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter your password"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none"
                        >
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </>

    );
};

export default Register;
