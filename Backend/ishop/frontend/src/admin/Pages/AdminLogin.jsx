import React, { useContext } from "react";
import { MainContext } from "../../Context";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { login } from "../../redux/reducers/adminSlice";

const AdminLogin = () => {
  const { API_BASE_URL, ADMIN_URL, notify } = useContext(MainContext)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const loginHandler = (e) => {
    e.preventDefault()
    const data = {
      email: e.target.email.value,
      password: e.target.password.value
    }
    axios.post(API_BASE_URL + ADMIN_URL + "/login", data).then(
      (responce) => {
        console.log(responce.data)
        if (responce.data.status == 1) {
          e.target.reset();
          navigate("/admin")
          dispatch(login({
            data:responce.data.admin,
            token:responce.data.token
          }))
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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Admin Login
        </h2>
        <form onSubmit={loginHandler}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Forgot your password?{" "}
          <a
            href="#"
            className="text-blue-500 hover:underline transition duration-300"
          >
            Reset here
          </a>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
