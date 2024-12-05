import React from 'react'
import { getDatabase, ref, set } from "firebase/database";
import { v4 as uuidv4 } from 'uuid';


export default function Form() {
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            contact: e.target.contact.value
        }

        const userId = uuidv4();
        const db = getDatabase();
        set(ref(db, 'users/' + userId), data);
        e.target.reset()
    }
    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-4 text-center">Form with Table</h1>
            <form
                className="bg-white p-6 shadow-md rounded-lg max-w-md mx-auto"
                onSubmit={handleSubmit}
            >
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Name</label>
                    <input
                        type="text"
                        name="name"
                        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your name"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Contact</label>
                    <input
                        type="text"
                        name="contact"
                        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your contact number"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition duration-200"
                >
                    Submit
                </button>
            </form>


        </div>
    )
}
