import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md'
import { MainContext } from '../../../Context';

const ProductAdd = () => {
  const { notify, category, categoryHandler, API_BASE_URL, CATEGORY, colorHandler, COLOR_URL, color } = useContext(MainContext)

  useEffect(
    () => {
      categoryHandler()
      colorHandler()
    },
    []
  )
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
                Add
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <section className=" mt-4 min-h-screen flex items-center justify-center">
        <div className="bg-white shadow-md rounded-lg w-full max-w-4xl p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8">Add a New Product</h2>
          <form action="#" className="space-y-6">
            {/* Product Name */}
            <div className='grid grid-cols-2 gap-5'>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Product Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="block w-full border outline-none border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:ring-blue-500 focus:shadow-md focus:border-blue-500"
                  placeholder="Enter product name"
                  required
                />
              </div>

              {/* Brand */}
              <div>
                <label htmlFor="Slug" className="block text-sm font-medium text-gray-700 mb-1">
                  Slug
                </label>
                <input
                  type="text"
                  id="Slug"
                  name="Slug"
                  className="block w-full border outline-none border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:ring-blue-500 focus:shadow-md focus:border-blue-500"
                  placeholder="Enter product Slug"
                  required
                />
              </div>
            </div>

            <div className='grid grid-cols-3 gap-4'>
              <div>
                <label htmlFor="Original_Price" className="block text-sm font-medium text-gray-700 mb-1">
                  Original Price
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-gray-500">$</span>
                  <input
                    type="number"
                    id="Original_Price"
                    name="Original_Price"
                    className="block w-full border outline-none border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:ring-blue-500 focus:shadow-md focus:border-blue-500"
                    placeholder="Enter Original_Price"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="discound" className="block text-sm font-medium text-gray-700 mb-1">
                  Discound Price
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-gray-500">$</span>
                  <input
                    type="number"
                    id="discound"
                    name="discound"
                    className="block w-full border outline-none border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:ring-blue-500 focus:shadow-md focus:border-blue-500"
                    placeholder="Enter discound"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="final_price" className="block text-sm font-medium text-gray-700 mb-1">
                  Final Price
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-gray-500">$</span>
                  <input
                    type="number"
                    id="final_price"
                    name="final_price"
                    className="block w-full border outline-none border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:ring-blue-500 focus:shadow-md focus:border-blue-500"
                    placeholder="Enter final_price"
                    required
                  />
                </div>
              </div>

            </div>

            <div className='grid gap-8 grid-cols-2'>
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  id="category"
                  className="block w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  {
                    category.map((cat,i)=>{
                      return   <option value="TV">{cat.name}</option>
                    })
                  }
                
                </select>
              </div>
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  Color
                </label>
                <select
                  id="category"
                  className="block w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  {
                    color.map((col,i)=>{
                      return   <option value="TV">{col.name}</option>
                    })
                  }
                </select>
              </div>
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Short Description
              </label>
              <textarea
                id="description"
                name="description"
                rows="4"
                className="block w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter product description"
                required
              ></textarea>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Long Description
              </label>
              <textarea
                id="description"
                name="description"
                rows="4"
                className="block w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter product description"
                required
              ></textarea>
            </div>

            <div>
              <label htmlFor="brand" className="block text-sm font-medium text-gray-700 mb-1">
                image
              </label>
              <input
                type="file"
                id="brand"
                name="brand"
                className="block w-full border outline-none border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:ring-blue-500 focus:shadow-md focus:border-blue-500"
                placeholder="Enter product brand"
                required
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg shadow-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </section>

    </>

  );
};

export default ProductAdd;
