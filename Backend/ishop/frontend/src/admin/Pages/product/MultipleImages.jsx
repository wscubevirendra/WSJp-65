import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md'
import { MainContext } from '../../../Context';
import axios from 'axios';


export default function MultipleImages() {
    const { notify, category, categoryHandler, API_BASE_URL, CATEGORY, colorHandler, COLOR_URL, color, PRODUCT_URL } = useContext(MainContext)
    const { productId } = useParams()
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (let img of e.target.productImages.files) {
            formData.append("images", img)
        }

        axios.post(API_BASE_URL + PRODUCT_URL + "/multiple-images/" + productId, formData).then(
            (responce) => {
                if (responce.data.status == 1) {
                    e.target.reset()
                }
                notify(responce.data.msg, responce.data.status)

            }

        ).catch(
            (error) => {
                notify("internal server error", 0)
            }

        )

    }
    return (
        <>
            <nav className="flex mt-2" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li className="inline-flex items-center">
                        <Link
                            to="/admin"
                            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-800 "
                        >
                            <FaHome className="w-3 h-3 me-2.5" />
                            DashBoard
                        </Link>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <MdKeyboardArrowRight className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" />
                            <Link
                                to="/admin/product"
                                className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-800 md:ms-2 "
                            >
                                Product
                            </Link>
                        </div>
                    </li>
                    <li aria-current="page">
                        <div className="flex items-center">
                            <MdKeyboardArrowRight className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" />
                            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                              images  Add
                            </span>
                        </div>
                    </li>
                </ol>
            </nav>
            <div className="max-w-xxl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Add Product Images</h2>
                <form onSubmit={handleSubmit}>

                    <div className="mb-4">
                        <label className="block text-gray-700">Image:</label>
                        <input
                            type="file"
                            name="productImages"
                            multiple
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                        Add
                    </button>
                </form>
            </div>

        </>

    );
}
