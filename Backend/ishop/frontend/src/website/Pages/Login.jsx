import { useState, useContext } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { MainContext } from "../../Context";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { login } from "../../redux/reducers/userSlice";
import { dbToCart } from "../../redux/reducers/cartSlice";


const Login = () => {
  const { API_BASE_URL, USER_URL, notify } = useContext(MainContext)
  const dispatched = useDispatch()
  const navigator = useNavigate()
  const cart = useSelector((state) => state.cart)
  const [searchParams, SetsearchParams] = useSearchParams()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
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
      axios.post(API_BASE_URL + USER_URL + "/login", formData).then(
        (responce) => {
          if (responce.data.status == 1) {
            e.target.reset()
            setFormData({ name: "", email: "" });
            setErrors({});
            dispatched(login({
              data: responce.data.user,
              token: responce.data.token
            }))


            axios.post(API_BASE_URL + USER_URL + "/move-to-db/" + responce?.data?.user._id, {
              cartData: JSON.stringify(cart.data)
            }).then(
              (resp) => {
                const latestCart = resp.data.dbCartData
                let original_total = 0
                let final_total = 0
                const data = latestCart.map(
                  (lc) => {
                    original_total += (lc.product_id.originalPrice * lc.qty)
                    final_total += (lc.product_id.finalPrice * lc.qty)
                    return {
                      productId: lc.product_id._id,
                      qty: lc.qty
                    }

                  }
                )

                dispatched(
                  dbToCart(
                    {
                      data,
                      total: final_total,
                      original_total: original_total

                    }
                  )
                )

              }
            ).catch((error) => {
              console.log(error)
            })

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
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
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

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="text-sm mt-2 font-light text-gray-500 ">
          Already have an account?{" "}
          <Link
            to={`/register?${searchParams.toString()}`}
            className="font-medium text-primary-600 hover:underline "
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
