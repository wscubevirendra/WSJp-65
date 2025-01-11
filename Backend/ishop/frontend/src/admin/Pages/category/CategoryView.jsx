import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCheck, FaEdit, FaTrash } from 'react-icons/fa';
import { MainContext } from '../../../Context';
import axios from 'axios';
import Swal from 'sweetalert2'



export default function CategoryView() {
  const { category, categoryHandler, API_BASE_URL, CATEGORY, notify } = useContext(MainContext)


  useEffect(
    () => {
      categoryHandler()
    }, []
  )

  function statusHandler(id) {
    axios.patch(API_BASE_URL + CATEGORY + `/status/${id}`).then(
      (responce) => {
        if (responce.data.status == 1) {
          categoryHandler()
        }
        notify(responce.data.msg, responce.data.status)
      }
    ).catch(
      (error) => {
        console.log(error)
      }
    )

  }


  const deleteHandler = (id) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });

        axios.delete(API_BASE_URL + CATEGORY + "/delete/" + id).then(
          (response) => {
            if (response.data.status == 1) {
              categoryHandler()

            }
            notify(response.data.msg, response.data.status)
          }

        ).catch(
          (error) => {
            notify("internal server error", 0)

          }

        )
      }



    });








  }

  return (
    <div className="  flex items-center justify-center">
      <div className="w-full max-w-6xl p-4 bg-white  rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold text-gray-800">Category Management</h1>
          <Link to="/admin/category/add">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-200">Add New Category</button></Link>

        </div>

        <table className="min-w-full text-sm border-collapse border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-center text-gray-600 font-medium border-b">Category Name</th>
              <th className="px-4 py-2 text-center text-gray-600 font-medium border-b">Slug</th>
              <th className="px-4 py-2 text-center text-gray-600 font-medium border-b">Image</th>
              <th className="px-4 py-2 text-center text-gray-600 font-medium border-b">Status</th>
              <th className="px-4 py-2 text-center text-gray-600 font-medium border-b">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {/* Example Row */}
            {
              Array.isArray(category)
              &&
              category.map(
                (cat, i) => {
                  return (
                    <tr key={i} className="hover:bg-gray-100 transition-all duration-200">
                      <td className="px-4 py-2 text-center text-gray-800">{cat.name}</td>
                      <td className="px-4 py-2 text-center text-gray-800">{cat.slug}</td>
                      <td className="px-4 py-2 text-center">

                        <img
                          src={API_BASE_URL + "/category/" + cat.category_image}
                          alt="Category"
                          className="w-10 h-10 rounded-full mx-auto"
                        />
                      </td>
                      <td className="px-4 py-2 text-center text-gray-600">
                        {
                          cat.status ?
                            <button onClick={() => statusHandler(cat._id)} className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 gap-1 transition-all duration-200">
                              Active
                            </button>
                            :
                            <button onClick={() => statusHandler(cat._id)} className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700  gap-1 transition-all duration-200">
                              Inactive
                            </button>

                        }

                      </td>
                      <td className="px-4  flex mt-4  items-center justify-center space-x-2">
                        <Link to={`/admin/category/edit/${cat._id}`}>
                          <button className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 flex items-center justify-center gap-1 transition-all duration-200">
                            <FaEdit />
                          </button></Link>

                        <button onClick={() => deleteHandler(cat._id)} className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 flex items-center justify-center gap-1 transition-all duration-200">
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  )
                }
              )
            }

            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
}


