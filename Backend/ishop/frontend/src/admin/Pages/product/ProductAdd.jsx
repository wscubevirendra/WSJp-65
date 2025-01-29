import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md'
import { MainContext } from '../../../Context';
import Select from 'react-select'
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const ProductAdd = () => {
  const { notify, category, categoryHandler, API_BASE_URL, CATEGORY, colorHandler, COLOR_URL, color, PRODUCT_URL } = useContext(MainContext)
  const [selColors, SetselColors] = useState([]);
  const [longDescription, SetLongDescription] = useState("")

  const productName = useRef();
  const productSlug = useRef();
  const originaPrice = useRef();
  const discountPrice = useRef();
  const finalPrice = useRef();

  const finaPriceCalculate = () => {
    let op = originaPrice.current.value;
    let dp = discountPrice.current.value;
    let final = Math.floor(op - op * (dp / 100));
    finalPrice.current.value = final
  }


  const generateSlug = () => {
    let slug = productName.current.value;
    slug = slug.toString() // Ensure it's a string
      .toLowerCase() // Convert to lowercase
      .trim() // Remove whitespace
      .replace(/[\s\W-]+/g, '-') // Replace spaces and non-word characters with hyphens
      .replace(/^-+|-+$/g, ''); // Remove leading and trailing hyphens

    productSlug.current.value = slug
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("name", productName.current.value);
    form.append("slug", productSlug.current.value);
    form.append("originalPrice", originaPrice.current.value);
    form.append("discountPercentage", discountPrice.current.value)
    form.append("finalPrice", finalPrice.current.value);
    form.append("categoryId", e.target.category.value);
    form.append("sortDescription", e.target.sortDescription.value);
    form.append("longDescription", longDescription);
    form.append("thumbnail", e.target.thumbnail.files[0]);
    form.append("colors", JSON.stringify(selColors));

    axios.post(API_BASE_URL + PRODUCT_URL + "/create", form).then(
      (response) => {
        if (response.data.status == 1) {
          e.target.reset()
        }
        notify(response.data.msg, response.data.status)
      }
    ).catch(
      (error) => {
        notify("Internal server error", 0)
      }
    )


  }

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
          <form onSubmit={submitHandler} className="space-y-6">
            {/* Product Name */}
            <div className='grid grid-cols-2 gap-5'>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Product Name
                </label>
                <input
                  type="text"
                  id="name"
                  ref={productName}
                  onChange={generateSlug}
                  name="name"
                  className="block w-full border outline-none border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:ring-blue-500 focus:shadow-md focus:border-blue-500"
                  placeholder="Enter product name"

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
                  ref={productSlug}
                  className="block w-full border outline-none border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:ring-blue-500 focus:shadow-md focus:border-blue-500"
                  placeholder="Enter product Slug"

                />
              </div>
            </div>

            <div className='grid grid-cols-3 gap-4'>
              <div>
                <label htmlFor="originalPrice" className="block text-sm font-medium text-gray-700 mb-1">
                  Original Price
                </label>
                <div className="relative">

                  <input
                    type="number"
                    id="originalPrice"
                    name="originalPrice"
                    onChange={finaPriceCalculate}
                    ref={originaPrice}
                    className="block w-full border outline-none border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:ring-blue-500 focus:shadow-md focus:border-blue-500"
                    placeholder="Enter originalPrice"

                  />
                </div>
              </div>
              <div>
                <label htmlFor="discountPercentage" className="block text-sm font-medium text-gray-700 mb-1">
                  Discound Price
                </label>
                <div className="relative">

                  <input
                    type="number"
                    id="discountPercentage"
                    name="discountPercentage"
                    ref={discountPrice}
                    onChange={finaPriceCalculate}
                    className="block w-full border outline-none border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:ring-blue-500 focus:shadow-md focus:border-blue-500"
                    placeholder="Enter discount Percentage"

                  />
                </div>
              </div>
              <div>
                <label htmlFor="finalPrice" className="block text-sm font-medium text-gray-700 mb-1">
                  Final Price
                </label>
                <div className="relative">

                  <input
                    type="number"
                    id="finalPrice"
                    name="finalPrice"
                    ref={finalPrice}
                    readOnly
                    className="block w-full border outline-none border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:ring-blue-500 focus:shadow-md focus:border-blue-500"
                    placeholder="Enter final Price"

                  />
                </div>
              </div>

            </div>

            <div className='grid gap-8 grid-cols-2'>
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>

                <Select
                  name='category'
                  options={
                    category.map((cat, i) => {
                      return { value: cat._id, label: cat.name }
                    })
                  } />


              </div>
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  Color
                </label>
                <Select
                  onChange={
                    (color) => {
                      const d = color.map(o => o.value);
                      SetselColors(d)
                    }
                  }

                  options={
                    color.map((col, i) => {
                      return { value: col._id, label: col.name }
                    })
                  }
                  isMulti
                  name="colors"
                  closeMenuOnSelect={false}

                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label htmlFor="longDescription" className="block text-sm font-medium text-gray-700 mb-1">
                Long Description
              </label>
              <ReactQuill theme="snow" value={longDescription} onChange={SetLongDescription} />
            </div>

            <div>
              <label htmlFor="sortDescription" className="block text-sm font-medium text-gray-700 mb-1">
                Sort Description
              </label>
              <textarea
                id="sortDescription"
                name="sortDescription"
                rows="4"
                className="block w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter product sort description"

              ></textarea>
            </div>

            <div>
              <label htmlFor="thumbnail" className="block text-sm font-medium text-gray-700 mb-1">
                image
              </label>
              <input
                type="file"
                id="thumbnail"
                name="thumbnail"
                className="block w-full border outline-none border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:ring-blue-500 focus:shadow-md focus:border-blue-500"
                placeholder="Enter product thumbnail"

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
