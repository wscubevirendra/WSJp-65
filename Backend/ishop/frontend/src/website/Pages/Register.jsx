import { useContext, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { MainContext } from "../../Context";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../../redux/reducers/userSlice";

const Register = () => {
    const { API_BASE_URL, USER_URL, notify } = useContext(MainContext)
    const [searchParams, SetsearchParams] = useSearchParams()
    const dispatched = useDispatch()
    const navigator = useNavigate()

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contact: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        let newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }

        if (!formData.contact.trim()) {
            newErrors.contact = "Contact number is required";
        } else if (!/^\d{10}$/.test(formData.contact)) {
            newErrors.contact = "Invalid contact number (10 digits required)";
        }

        if (!formData.password.trim()) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        if (!formData.confirmPassword.trim()) {
            newErrors.confirmPassword = "Confirm Password is required";
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            axios.post(API_BASE_URL + USER_URL + "/register", formData).then(
                (responce) => {
                    if (responce.data.status == 1) {
                        e.target.reset()
                        setFormData({ name: "", email: "", contact: "", password: "", confirmPassword: "" });
                        setErrors({});
                        dispatched(login({
                            data: responce.data.user,
                            token: responce.data.token
                        }))

                        if (searchParams.get("ref") == "checkout") {
                            navigator("/checkout")
                        } else {
                            navigator("/")
                        }
                    }
                    notify(responce.data.msg, responce.data.status)
                }
            ).catch(
                (error) => {
                    console.log(error)
                }
            )



        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-[600px]">
                <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
                <form onSubmit={handleSubmit} className="space-y-2 text-sm">
                    {/* Name Field */}
                    <div>
                        <label className="block text-gray-700 font-medium">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>

                    {/* Email Field */}
                    <div>
                        <label className="block text-gray-700 font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>

                    {/* Contact Field */}
                    <div>
                        <label className="block text-gray-700 font-medium">Contact</label>
                        <input
                            type="text"
                            name="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.contact && <p className="text-red-500 text-sm">{errors.contact}</p>}
                    </div>

                    {/* Password Field */}
                    <div>
                        <label className="block text-gray-700 font-medium">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                    </div>

                    {/* Confirm Password Field */}
                    <div>
                        <label className="block text-gray-700 font-medium">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition duration-300"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="text-sm mt-2 font-light text-gray-500 ">
                    Already have an account?{" "}
                    <Link
                        to={`/login?${searchParams.toString()}`}
                        className="font-medium text-primary-600 hover:underline "
                    >
                        Login here
                    </Link>
                </p>

            </div>
        </div>
    );
};

export default Register;
