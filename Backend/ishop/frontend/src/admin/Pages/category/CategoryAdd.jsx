import React, { useContext, useRef, useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { MainContext } from '../../../Context';

export default function CategoryAdd() {
  const { notify, API_BASE_URL, CATEGORY } = useContext(MainContext)
  const categoryName = useRef();
  const categorySlug = useRef();


  const generateSlug = () => {
    let slug = categoryName.current.value;
    slug = slug.toString() // Ensure it's a string
      .toLowerCase() // Convert to lowercase
      .trim() // Remove whitespace
      .replace(/[\s\W-]+/g, '-') // Replace spaces and non-word characters with hyphens
      .replace(/^-+|-+$/g, ''); // Remove leading and trailing hyphens

    categorySlug.current.value = slug
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: categoryName.current.value,
      slug: categorySlug.current.value
    }

    axios.post(API_BASE_URL + CATEGORY + "/create", data).then(
      (responce) => {
        if (responce.data.status == 1) {
          e.target.reset()
        }
        notify(responce.data.msg, responce.data.status)

      }

    ).catch(
      (error) => {
        console.log(error)
      }

    )


  };

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
                to="/admin/category"
                className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-800 md:ms-2 "
              >
                Category
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
      <div className="max-w-xxl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Add Category</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Category Name:</label>
            <input
              onChange={generateSlug}
              ref={categoryName}
              type="text"
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Slug:</label>
            <input
              ref={categorySlug}
              type="text"
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Image:</label>
            <input
              type="file"
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
            Add Category
          </button>
        </form>
      </div>

    </>

  );
}