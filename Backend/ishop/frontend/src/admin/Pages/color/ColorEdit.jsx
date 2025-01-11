import React, { useContext, useEffect, useRef, useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'
import { MainContext } from '../../../Context';

export default function ColorEdit() {
  const { notify, API_BASE_URL, colorHandler, COLOR_URL, color } = useContext(MainContext)
  const { colorId } = useParams()

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      colorCode: e.target.colorCode.value
    }


    axios.put(API_BASE_URL + COLOR_URL + "/update/" + colorId, data).then(
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


  };


  useEffect(
    () => {
      colorHandler(colorId)
    }, [colorId]
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
                to="/admin/color"
                className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-800 md:ms-2 "
              >
                Color
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <MdKeyboardArrowRight className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" />
              <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
              Edit
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <div className="max-w-xxl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Add Color</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Color Name:</label>
            <input
              name="name"
              type="text"
              defaultValue={color?.name}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">color code:</label>
            <input
              name="colorCode"
              type="color"
              className="w-full h-10 px-2 py-1  rounded-lg"
            />
            <div style={{background:color?.colorCode}} className='w-10 h-10 my-4 rounded-full'></div>
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
            Add Color
          </button>
        </form>
      </div>

    </>

  );
}