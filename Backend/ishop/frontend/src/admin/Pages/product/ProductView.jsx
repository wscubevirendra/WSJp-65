import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCheck, FaEdit, FaTrash } from 'react-icons/fa';
import { VscDiffMultiple } from "react-icons/vsc";
import { IoEyeSharp } from "react-icons/io5";
import { MainContext } from '../../../Context';
import axios from 'axios';
import Swal from 'sweetalert2'
import ReactDOMServer from "react-dom/server"



export default function ProductView() {
  const { category, categoryHandler, API_BASE_URL, CATEGORY, notify, PRODUCT_URL, getProduct, product } = useContext(MainContext)


  useEffect(
    () => {
      getProduct()
    }, []
  )

  function statusHandler(id, flag) {
    axios.patch(API_BASE_URL + PRODUCT_URL + `/status-update`, { id, flag }).then(
      (responce) => {
        if (responce.data.status == 1) {
          getProduct()
        }
        notify(responce.data.msg, responce.data.status)
      }
    ).catch(
      (error) => {
        notify("Internal Server Error", responce.data.status)
      }
    )

  }





  const viewAllDetails = (prod) => {
    const popUpProduct = ReactDOMServer.renderToString(<PopUpProduct API_BASE_URL={API_BASE_URL} product={prod} />)
    Swal.fire({
      html: popUpProduct,
      showCloseButton: true,
      customClass: {
        popup: "w-[800px]"
      }

    });
  }

  return (
    <div className="  flex items-center justify-center">
      <div className="w-full max-w-6xl p-4 bg-white  rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold text-gray-800">Product Management</h1>
          <Link to="/admin/product/add">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-200">Add New Product</button></Link>

        </div>

        <table className="min-w-full text-sm border-collapse border border-gray-200">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-4 py-2 text-center  font-medium border-b"> Name</th>
              <th className="px-4 py-2 text-center  font-medium border-b"> Price</th>
              <th className="px-4 py-2 text-center  font-medium border-b">Category</th>
              <th className="px-4 py-2 text-center  font-medium border-b">Image</th>
              <th className="px-4 py-2 text-center  font-medium border-b">Status</th>
              <th className="px-4 py-2 text-center  font-medium border-b">Stock</th>
              <th className="px-4 py-2 text-center  font-medium border-b">Top selling</th>
              <th className="px-4 py-2 text-center  font-medium border-b">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {/* Example Row */}
            {
              Array.isArray(product)
              &&
              product.map(
                (prod, i) => {
                  console.log(prod)
                  return (
                    <tr key={i} className="hover:bg-gray-100 transition-all duration-200">
                      <td className="px-4 py-2 text-center text-gray-800">{prod.name}</td>
                      <td className="px-4 py-2 text-center text-gray-800">
                        <span >₹{prod.finalPrice} </span>
                        <del>₹{prod.originalPrice}  </del>
                        <span className='text-red-500'>({prod.discountPercentage}%)</span>
                      </td>
                      <td className="px-4 py-2 text-center text-gray-800">{prod?.categoryId?.name}</td>
                      <td className="px-4 py-2 text-center">
                        <img
                          src={API_BASE_URL + "/product/" + prod.thumbnail}
                          alt="product"
                          className="w-10 h-10  mx-auto"
                        />
                      </td>


                      <td className="px-4 py-2 text-center text-gray-600">
                        {
                          prod.status ?
                            <button onClick={() => statusHandler(prod._id, 1)} className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 gap-1 transition-all duration-200">
                              Active
                            </button>
                            :
                            <button onClick={() => statusHandler(prod._id, 1)} className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700  gap-1 transition-all duration-200">
                              Inactive
                            </button>

                        }

                      </td>

                      <td className="px-4 py-2 text-center text-gray-600">
                        {
                          prod.stock ?
                            <button onClick={() => statusHandler(prod._id, 2)} className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 gap-1 transition-all duration-200">
                              In
                            </button>
                            :
                            <button onClick={() => statusHandler(prod._id, 2)} className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700  gap-1 transition-all duration-200">
                              Out
                            </button>

                        }

                      </td>

                      <td className="px-4 py-2 text-center text-gray-600">
                        {
                          prod.topSelling ?
                            <button onClick={() => statusHandler(prod._id, 3)} className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 gap-1 transition-all duration-200">
                              Yes
                            </button>
                            :
                            <button onClick={() => statusHandler(prod._id, 3)} className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700  gap-1 transition-all duration-200">
                              No
                            </button>

                        }

                      </td>
                      <td className="px-4  flex mt-4  items-center justify-center space-x-2">
                        <Link to={`/admin/category/edit/${prod._id}`}>
                          <button className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 flex items-center justify-center gap-1 transition-all duration-200">
                            <FaEdit />
                          </button></Link>

                        <button className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 flex items-center justify-center gap-1 transition-all duration-200">
                          <FaTrash />
                        </button>
                        <Link to={`/admin/product/multiple-image/` + prod._id}>
                          <button className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 flex items-center justify-center gap-1 transition-all duration-200">
                            <VscDiffMultiple />
                          </button></Link>

                        <button onClick={() => viewAllDetails(prod)} className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 flex items-center justify-center gap-1 transition-all duration-200">
                          <IoEyeSharp />
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



function PopUpProduct({ product, API_BASE_URL }) {
  console.log(product)
  return (
    <div className="p-6 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl overflow-hidden">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="px-6 py-3 text-left font-semibold uppercase">Field</th>
              <th className="px-6 py-3 text-left font-semibold uppercase">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white even:bg-blue-50">
              <td className="px-6 py-4 font-medium text-gray-700">Name</td>
              <td className="px-6 py-4 text-gray-600">{product.name}</td>
            </tr>
            <tr className="odd:bg-white even:bg-blue-50">
              <td className="px-6 py-4 font-medium text-gray-700">Slug</td>
              <td className="px-6 py-4 text-gray-600">{product.slug}</td>
            </tr>
            <tr className="odd:bg-white even:bg-blue-50">
              <td className="px-6 py-4 font-medium text-gray-700">
                Short Description
              </td>
              <td className="px-6 py-4 text-gray-600">
                {product.shortDescription}

              </td>
            </tr>
            <tr className="odd:bg-white even:bg-blue-50">
              <td className="px-6 py-4 font-medium text-gray-700">
                Long Description
              </td>
              <td className="px-6 py-4 text-gray-600" dangerouslySetInnerHTML={{ __html: product.longDescription }} />

            </tr>
            <tr className="odd:bg-white even:bg-blue-50">
              <td className="px-6 py-4 font-medium text-gray-700">
                Original Price
              </td>
              <td className="px-6 py-4 text-gray-600">{product.originalPrice}</td>
            </tr>
            <tr className="odd:bg-white even:bg-blue-50">
              <td className="px-6 py-4 font-medium text-gray-700">
                Discount Percentage
              </td>
              <td className="px-6 py-4 text-gray-600">10%</td>
            </tr>
            <tr className="odd:bg-white even:bg-blue-50">
              <td className="px-6 py-4 font-medium text-gray-700">Final Price</td>

              <td className="px-6 py-4 text-gray-600"></td>
            </tr>
            <tr className="odd:bg-white even:bg-blue-50">
              <td className="px-6 py-4 font-medium text-gray-700">Category ID</td>
              <td className="px-6 py-4 text-gray-600">63f7b2c1e123456789abcdef</td>
            </tr>
            <tr className="odd:bg-white even:bg-blue-50">
              <td className="px-6 py-4 font-medium text-gray-700">Colors</td>
              <td className="px-6 py-4 text-gray-600">Red, Blue</td>
            </tr>
            <tr className="odd:bg-white even:bg-blue-50">
              <td className="px-6 py-4 font-medium text-gray-700">Thumbnail</td>
              <td className="px-6 py-4 text-gray-600">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Thumbnail"
                  className="w-16 h-16 rounded-md shadow-md"
                />
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-blue-50">
              <td className="px-6 py-4 font-medium text-gray-700">Images</td>
              <td className="px-6 py-4 text-gray-600">
                {
                  product?.images?.map((img, i) => {
                    return (
                      <img
                        src={API_BASE_URL + "/product/" + img}
                        alt="Image 1"
                        className="inline w-16 h-16 rounded-md shadow-md mr-2"
                      />
                    )
                  })
                }


              </td>
            </tr>
            <tr className="odd:bg-white even:bg-blue-50">
              <td className="px-6 py-4 font-medium text-gray-700">Stock</td>
              <td className="px-6 py-4 text-gray-600">In Stock</td>
            </tr>
            <tr className="odd:bg-white even:bg-blue-50">
              <td className="px-6 py-4 font-medium text-gray-700">Top Selling</td>
              <td className="px-6 py-4 text-gray-600">Yes</td>
            </tr>
            <tr className="odd:bg-white even:bg-blue-50">
              <td className="px-6 py-4 font-medium text-gray-700">Status</td>
              <td className="px-6 py-4 text-gray-600">Active</td>
            </tr>
            <tr className="odd:bg-white even:bg-blue-50">
              <td className="px-6 py-4 font-medium text-gray-700">Created At</td>
              <td className="px-6 py-4 text-gray-600">2025-01-15</td>
            </tr>
            <tr className="odd:bg-white even:bg-blue-50">
              <td className="px-6 py-4 font-medium text-gray-700">Updated At</td>
              <td className="px-6 py-4 text-gray-600">2025-01-16</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  )
}



