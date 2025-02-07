
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ThankYou() {
    const { order_id } = useParams()


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md text-center">
                {/* <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto" /> */}
                <h2 className="text-2xl font-bold text-gray-800 mt-4">Thank You for Your Order!</h2>
                <p className="text-gray-600 mt-2">Your order has been placed successfully.</p>
                {order_id && <p className="text-gray-600 text-sm mt-1">Order ID: {order_id}</p>}
                <p className="text-gray-600 text-sm mt-1">We will send you a confirmation email with the details.</p>
                <button
                    className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
                >
                    <Link to="/"> Continue Shopping</Link>

                </button>
            </div>
        </div>
    );
}
