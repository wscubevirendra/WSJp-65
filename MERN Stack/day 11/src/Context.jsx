import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';
const MainContext = createContext()

function Context(props) {
    const [product, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {

        const lsCart=localStorage.getItem("cart")
        if(lsCart){
            setCart(JSON.parse(lsCart))
        }

            axios
            .get("https://dummyjson.com/products")
            .then((response) => {
                setProduct(response.data.products);
            })
            .catch((error) => console.log(error))

    }, []);


    function AddtoCart(id) {
        const productCheck = product.find((item) => item.id === id)
        if (productCheck) {
            const existingCart = cart.find((item) => item.id === id)
            if (existingCart) {
                //qty increase
                const updateCart = cart.map((item) =>
                    item.id === id ? { ...item, qty: item.qty + 1 } : item
                )
                setCart(updateCart)
                localStorage.setItem("cart", JSON.stringify(updateCart))


            } else {
                const cartData = [...cart, { ...productCheck, qty: 1 }]
                setCart(cartData)
                localStorage.setItem("cart", JSON.stringify(cartData))
            }


        }
    }

    function RemovetoCart(id) {
        const updateCart = cart.filter((item) => item.id != id)
        setCart(updateCart)
        localStorage.setItem("cart", JSON.stringify(updateCart))

    }

    return (
        <MainContext.Provider value={{ AddtoCart, cart, RemovetoCart }}>
            {props.children}
        </MainContext.Provider>
    )
}


export default Context
export { MainContext }