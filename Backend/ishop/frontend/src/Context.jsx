import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from 'react-redux';

const MainContext = createContext()

export default function Context(props) {

    const API_BASE_URL = "http://localhost:5000"
    const CATEGORY = "/category"
    const COLOR_URL = "/color"
    const PRODUCT_URL = "/product"
    const ADMIN_URL = "/admin"
    const [category, setCategory] = useState([]);
    const [color, setColor] = useState([]);
    const [product, setProduct] = useState([]);

    const notify = (msg, flag) => toast(msg, { type: flag ? "success" : "error" });

    function categoryHandler(category_id = null) {
        let url = null;
        if (category_id == null) {
            url = API_BASE_URL + CATEGORY
        } else {
            url = API_BASE_URL + CATEGORY + `/${category_id}`
        }
        axios.get(url).then(
            (success) => {
                setCategory(success.data.category)
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }

    function colorHandler(color_id = null) {
        let url = null;
        if (color_id == null) {
            url = API_BASE_URL + COLOR_URL
        } else {
            url = API_BASE_URL + COLOR_URL + `/${color_id}`
        }
        axios.get(url).then(
            (success) => {
                setColor(success.data.color)
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }

    function getProduct(product_id = null, limit = null, categorySlug = null, productColor = null) {
        let url = null;
        if (product_id == null) {
            url = API_BASE_URL + PRODUCT_URL
        } else {
            url = API_BASE_URL + PRODUCT_URL + `/${product_id}`
        }

        const query = new URLSearchParams();
        query.append("limit", limit)
        query.append("categorySlug", categorySlug)
        query.append("productColor", productColor)


        axios.get(url + "?" + query).then(
            (success) => {
                setProduct(success.data.product)
            }
        ).catch(
            (error) => {
                setProduct([])
            }
        )
    }



    return (
        <MainContext.Provider value={{ notify, category, categoryHandler, API_BASE_URL, CATEGORY, colorHandler, COLOR_URL, color, PRODUCT_URL, getProduct, product, ADMIN_URL }}>
            {
                props.children
            }
            <ToastContainer />

        </MainContext.Provider>
    )
}

export { MainContext }
