import React, { useContext, useState } from 'react';
import { MainContext } from '../Context';

const Cart = () => {
    const { cart, RemovetoCart } = useContext(MainContext)

    return (
        cart.map((item, i) => {
            return (
                <div className="flex max-w-[700px] mx-auto mt-4 items-center justify-between border p-4 rounded-lg shadow-md bg-white mb-4">
                    {/* Image Section */}
                    <img
                        src={item.thumbnail}
                        alt='img'
                        className="w-16 h-16 object-cover rounded-md"
                    />

                    {/* Product Info */}
                    <div className="flex-1 ml-4">
                        <h2 className="text-lg font-semibold">{item.title}</h2>
                        <p className="text-gray-600">Price: ${item.price}</p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-2">
                        <button
                            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                        >
                            -
                        </button>
                        <span className="text-lg">{item.qty}</span>
                        <button

                            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                        >
                            +
                        </button>
                    </div>

                    {/* Remove Button */}
                    <button
                        onClick={() => RemovetoCart(item.id)}
                        className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                        Remove
                    </button>
                </div>
            )
        })
    );
};

export default Cart;
