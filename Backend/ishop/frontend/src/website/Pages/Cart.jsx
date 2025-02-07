import React, { useContext, useEffect } from 'react';
import { AiOutlineHeart, AiOutlineClose, AiOutlineMinus, AiOutlinePlus, AiOutlineArrowRight } from 'react-icons/ai';
import { MainContext } from '../../Context';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { formatPriceINR } from "../../helper"

export default function Cart() {
    const { getProduct, product } = useContext(MainContext);
    const cart = useSelector((state) => state.cart)
    const user = useSelector((state) => state.user.data)
    const navigator = useNavigate()

    function IsLogin() {
        console.log("Hello")
        if (user) {
            navigator("/checkout")
        } else {
            navigator("/login?ref=checkout")

        }
    }

    useEffect(
        () => {
            getProduct(null)
        },
        []
    )


    return (
        <section className="bg-white py-8 antialiased md:py-16">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                    Shopping Cart
                </h2>
                <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                    <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                        <div className="space-y-6">
                            {
                                (product.length != 0 && cart.data.length != 0)
                                &&

                                cart?.data.map(
                                    (d, i) => {

                                        const ProductCart = product.find((p) => p._id == d.productId)
                                        return (
                                            <div key={i} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6">
                                                <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                                                    <a href="#" className="shrink-0 md:order-1">
                                                        <img
                                                            className="h-20 w-20"
                                                            src={`http://localhost:5000/product/${ProductCart.thumbnail}`}
                                                            alt="imac image"
                                                        />
                                                    </a>
                                                    <label htmlFor="counter-input" className="sr-only">
                                                        Choose quantity:
                                                    </label>
                                                    <div className="flex items-center justify-between md:order-3 md:justify-end">
                                                        <div className="flex items-center">
                                                            <button
                                                                type="button"
                                                                id="decrement-button"
                                                                className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
                                                            >
                                                                <AiOutlineMinus className="text-gray-900" />
                                                            </button>
                                                            <input
                                                                type="text"
                                                                id="counter-input"
                                                                className="w-10 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0"
                                                                placeholder=""
                                                                defaultValue={d.qty}
                                                                required=""
                                                            />
                                                            <button
                                                                type="button"
                                                                id="increment-button"
                                                                className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
                                                            >
                                                                <AiOutlinePlus className="text-gray-900" />
                                                            </button>
                                                        </div>
                                                        <div className="text-end md:order-4 md:w-32">
                                                            <p className="text-base font-bold text-gray-900">
                                                                {
                                                                    formatPriceINR(ProductCart.finalPrice * d.qty)
                                                                }

                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                                                        <a
                                                            href="#"
                                                            className="text-base font-medium text-gray-900 hover:underline"
                                                        >
                                                            {ProductCart.name}
                                                        </a>
                                                        <div className="flex items-center gap-4">

                                                            <button
                                                                type="button"
                                                                className="inline-flex  items-center text-sm font-medium text-red-600 hover:underline"
                                                            >
                                                                <AiOutlineClose className="me-1.5" />
                                                                Remove
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )

                                    })
                            }


                        </div>
                    </div>
                    <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                        <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
                            <p className="text-xl font-semibold text-gray-900">
                                Order summary
                            </p>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <dl className="flex items-center justify-between gap-4">
                                        <dt className="text-base font-normal text-gray-500">
                                            Original price
                                        </dt>
                                        <dd className="text-base font-medium text-gray-900">
                                            {
                                                formatPriceINR(cart.original_total)
                                            }

                                        </dd>
                                    </dl>
                                    <dl className="flex items-center justify-between gap-4">
                                        <dt className="text-base font-normal text-gray-500">
                                            Savings
                                        </dt>
                                        <dd className="text-base font-medium text-green-600">
                                            -{formatPriceINR(cart.original_total - cart.total)}
                                        </dd>
                                    </dl>

                                </div>
                                <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
                                    <dt className="text-base font-bold text-gray-900">
                                        Total
                                    </dt>
                                    <dd className="text-base font-bold text-gray-900">
                                        {formatPriceINR(cart.total)}
                                    </dd>
                                </dl>
                            </div>

                            <button
                                onClick={IsLogin}
                                className="text-white my-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            >
                                Proceed to Checkout
                            </button>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}