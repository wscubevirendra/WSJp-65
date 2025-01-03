import React from 'react';
import { Link } from 'react-router-dom';


export default function ProductView() {
  const categories = [
    { name: 'Electronics', slug: 'electronics', images: 'image1.jpg', status: 'Active' },
    { name: 'Fashion', slug: 'fashion', images: 'image2.jpg', status: 'Inactive' },
    // Add more categories as needed
  ];

  return (
    <div className="container mx-auto p-2">
      <div className='flex justify-between my-2 items-center'>
        <h1 className="text-2xl font-bold  ">Product View</h1>
        <div>
          <button className="bg-red-500 text-white px-2 py-1 rounded">
            <Link to={"/admin/Product/add"}>
              Add Product
            </Link>
          </button>
        </div>
      </div>

      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-center">Product Name</th>
            <th className="py-2 px-4 border-b text-center">Slug</th>
            <th className="py-2 px-4 border-b text-center">Images</th>
            <th className="py-2 px-4 border-b text-center">Status</th>
            <th className="py-2 px-4 border-b text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b text-center">{category.name}</td>
              <td className="py-2 px-4 border-b text-center">{category.slug}</td>
              <td className="py-2 px-4 border-b text-center">
                <img src={category.images} alt={category.name} className="w-16 h-16 object-cover mx-auto" />
              </td>
              <td className="py-2 px-4 border-b text-center">
                <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">{category.status}</button>
              </td>
              <td className="py-2 px-4 border-b text-center">
                <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}