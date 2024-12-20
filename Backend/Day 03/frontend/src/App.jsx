import axios from 'axios';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [users, setUsers] = useState([]);
  function getUser() {
    axios.get("http://localhost:5000/user").then(
      (succes) => {

        if (succes.data.status == 1) {
          setUsers(succes.data.users)
        }
      }
    ).catch(
      (error) => {
        console.log(error)
      }
    )
  }

  useEffect(
    () => {
      getUser()
    },
    []
  )


  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-8 gap-6">
        {/* Table Section */}
        <div className="bg-white p-6 col-span-5 shadow rounded">
          <h2 className="text-xl font-semibold mb-4">Data Table</h2>
          <table className="min-w-full border-collapse border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">S.No</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Contact</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map(
                  (data, index) => {
                    return (
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">{index+1}</td>
                        <td className="border border-gray-300 px-4 py-2">{data.name}</td>
                        <td className="border border-gray-300 px-4 py-2">{data.email}</td>
                        <td className="border border-gray-300 px-4 py-2">{data.contact}</td>
                        <td className="border border-gray-300 px-4 py-2">
                          {
                            data.status ? 
                            <button className='bg-blue-500 p-1 rounded-md text-white '>Active</button>

                            :
                            <button className='bg-blue-500 p-1 rounded-md text-white'>In-active</button>
                          }
                        </td>
                        <td className="border border-gray-300 px-4 py-2">Delete</td>
                      </tr>
                    )
                  }
                )
              }


            </tbody>
          </table>
        </div>

        {/* Form Section */}
        <div className="bg-white col-span-3 p-6 shadow rounded">
          <h2 className="text-xl font-semibold mb-4">User Form</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Contact
              </label>
              <input
                type="tel"
                id="contact"
                name="contact"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your contact"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
