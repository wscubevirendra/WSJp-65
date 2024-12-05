import React, { useContext, useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { MainContext } from '../Context';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const { login } = useContext(MainContext)
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault();
        const auth = getAuth();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                toast.success("Successfully signed in!"); // Display success toast
                // Successful sign-in
                const user = userCredential.user;
                login(user); // Call login function from context
                setTimeout(() => {
                    navigate("/"); // Redirect to the home page
                }, 2000);


            })
            .catch((error) => {
                // Handle errors
                const errorMessage = error.message;
                toast.error(`Sign-in failed: ${errorMessage}`); // Display error toast
            });
    };


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <ToastContainer />

            <div className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
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
                        Login
                    </button>
                </form>
                <p className="text-sm text-gray-600 mt-4 text-center">
                    Don't have an account? <Link to="/register" className="text-blue-500">Register</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
