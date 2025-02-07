import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { MainContext } from "../Context";

export default function Listing() {
    const { AddtoCart } = useContext(MainContext)
    const [product, setProduct] = useState([]);
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(true)
    const [totalPages, SettotalPages] = useState(0)
    const [curentPage, SetcurentPage] = useState(0)
    const [searchParams, setsearchParams] = useSearchParams()
    const { category_slug } = useParams();
    let limit = 10;

    useEffect(() => {
        axios
            .get("https://dummyjson.com/products/categories")
            .then((response) => {
                setCategory(response.data);
            })
            .catch((error) => console.log(error))

    }, []);




    useEffect(() => {
        let API;
        if (category_slug == null) {
            API = "https://dummyjson.com/products"


        } else {
            API = `https://dummyjson.com/products/category/${category_slug}`

        }
        setLoading(true)
        axios
            .get(API)
            .then((response) => {
                
                setProduct(response.data.products);
                SettotalPages(Math.ceil(response.data.total / limit))
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [category_slug]);

    let pagination = [];
    for (let i = 0; i < totalPages; i++) {
        pagination.push(
            <li onClick={() => SetcurentPage(i)} className="flex cursor-pointer items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">

                {i + 1}

            </li>
        )

    }

    useEffect(
        () => {
            axios.get(`https://dummyjson.com/products?skip=${limit * curentPage}`)
                .then((response) => {
                    setLoading(true)
                    setProduct(response.data.products);
                    setsearchParams({ page: curentPage })
                })
                .catch((error) => console.log(error))
                .finally(() => setLoading(false))

        },
        [curentPage]
    )

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 py-6">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                    {/* Sidebar */}
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 mb-6">Categories</h1>
                        <div className="space-y-4">
                            <Link
                                to="/"
                                className={`${category_slug == null ? "bg-blue-500" : ""} block text-center bg-gray-200 py-2 rounded-md shadow-md`}
                            >
                                All
                            </Link>
                            {category.map((cat, index) => (
                                <Link
                                    key={index}
                                    to={`/${cat.slug}`}
                                    className={`${category_slug == cat.slug ? "bg-blue-500" : ""} block text-center bg-gray-200 py-2 rounded-md shadow-md`}
                                >
                                    {cat.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className="lg:col-span-4">
                        <nav aria-label="Page navigation example">
                            <ul ul className="flex items-center -space-x-px h-10 text-base">
                                {
                                    pagination
                                }
                            </ul>

                        </nav>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">

                            {
                                loading == true ?
                                    [1, 2, 3, 4, 5, 6, 7, 8].map((d, i) => {
                                        return (
                                            <div key={i} className="group relative border rounded-md shadow-md bg-white animate-pulse">
                                                <div className="w-full aspect-square bg-gray-300 rounded-t-md"></div>
                                                <div className="p-4">
                                                    <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                                                    <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
                                                    <div className="flex justify-between items-center mt-2">
                                                        <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                                                        <div className="h-4 bg-gray-300 rounded w-1/5"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })

                                    :
                                    product.map((data, index) => (
                                        <div
                                            key={index}
                                            className="group relative border rounded-md shadow-md hover:shadow-lg bg-white"
                                        >
                                            <img
                                                src={data.thumbnail}
                                                alt={data.title}
                                                className="w-full aspect-square rounded-t-md object-cover group-hover:opacity-90"
                                            />
                                            <div className="p-4">
                                                <h3 className="text-sm font-semibold text-gray-800">
                                                    <Link to={`/details/${data.id}`}>
                                                        {data.title}
                                                    </Link>
                                                </h3>
                                                <div className="flex justify-between items-center mt-2 text-gray-600">
                                                    <p className="text-sm">{data.rating}/5</p>
                                                    <p className="text-sm font-medium text-gray-900">
                                                        ${data.price}
                                                    </p>
                                                </div>
                                            </div>
                                            <button onClick={() => {
                                                AddtoCart(data.id)
                                            }} className="text-white ml-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add to cart</button>
                                        </div>
                                    ))

                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
