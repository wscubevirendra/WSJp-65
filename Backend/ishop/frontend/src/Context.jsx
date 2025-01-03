import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const MainContext = createContext()

export default function Context(props) {
    const API_BASE_URL = "http://localhost:5000"
    const CATEGORY = "/category"
    const [category, setCategory] = useState([]);

    const notify = (msg, flag) => toast(msg, { type: flag ? "success" : "error" });

    function categoryHandler() {
        axios.get(API_BASE_URL + CATEGORY).then(
            (success) => {
                setCategory(success.data.category)
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }



    return (
        <MainContext.Provider value={{ notify, category, categoryHandler,API_BASE_URL,CATEGORY }}>
            {
                props.children
            }
            <ToastContainer />

        </MainContext.Provider>
    )
}

export { MainContext }
