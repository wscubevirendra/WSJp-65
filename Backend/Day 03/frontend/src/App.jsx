import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const [users, setUsers] = useState([]);
  const [userDetails, setUserDetails] = useState(null);
  const notify = (msg, flag) => toast(msg, { type: flag ? "success" : "error" });



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

  function statusChange(id) {
    axios.patch("http://localhost:5000/user/status-update/" + id).then(
      (sucess) => {
        if (sucess.data.status == 1) {
          getUser()

        }
        notify(sucess.data.msg, sucess.data.status)
      }
    ).catch(
      (error) => {
        notify("Internal server error", 0)

      }
    )
  }


  function deleteHandler(id) {
    axios.delete(`http://localhost:5000/user/delete/${id}`).then(
      (succes) => {
        if (succes.data.status == 1) {
          getUser()
        }
        notify(succes.data.msg, succes.data.status)
      }
    ).catch(
      (error) => {
        notify("Internal server error", 0)
      }
    )
  }


  const submitHandler = (e) => {
    e.preventDefault()
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      contact: e.target.contact.value,
      password: e.target.password.value
    }

    let responce;
    if (userDetails == null) {
      responce = axios.post("http://localhost:5000/user/register", data)

    } else {
      responce = axios.put(`http://localhost:5000/user/update/${userDetails._id}`, data)

    }
   


    responce.then(
      (sucess) => {
        if (sucess.data.status == 1) {
          getUser()
          setUserDetails(null)
        }
        notify(sucess.data.msg, sucess.data.status)
        e.target.reset()

      }
    ).catch(
      (error) => {
        console.log(error)
        notify("Internal server error", 0)

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
        <div className="bg-white p-6 col-span-6 shadow rounded">
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
                <th className="border border-gray-300 px-4 py-2 text-left">Edit</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map(
                  (data, index) => {
                    return (
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                        <td className="border border-gray-300 px-4 py-2">{data.name}</td>
                        <td className="border border-gray-300 px-4 py-2">{data.email}</td>
                        <td className="border border-gray-300 px-4 py-2">{data.contact}</td>
                        <td className="border border-gray-300 px-4 py-2">
                          {
                            data.status ?
                              <button onClick={() => statusChange(data._id)} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Active</button>

                              :
                              <button onClick={() => statusChange(data._id)} className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'>Inactive</button>
                          }
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          <button onClick={() => deleteHandler(data._id)} className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 '>Delete</button>

                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          <button onClick={() => setUserDetails(data)} className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 '>Edit</button>

                        </td>



                      </tr>
                    )
                  }
                )
              }


            </tbody>
          </table>
        </div>

        <UserRegister submitHandler={submitHandler} userDetails={userDetails} />
      </div>
    </div>
  );
};


function UserRegister({ submitHandler, userDetails }) {
  console.log(userDetails)
  return (
    <div className="bg-white col-span-2 p-6 shadow rounded">
      <ToastContainer />
      <h2 className="text-xl font-semibold mb-4">User Form</h2>
      <form onSubmit={submitHandler}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={userDetails?.name}
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
            defaultValue={userDetails?.email}
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
            defaultValue={userDetails?.contact}
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
            defaultValue={userDetails?.password}
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
  )
}




export default App;
