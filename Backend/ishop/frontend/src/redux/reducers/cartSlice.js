import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'Cart',
    initialState: {
        data: [],
        total: 0
    },
    reducers: {
        addToCart(state, { payload }) {
            const productData = state.data.find((prod) => prod.productId === payload.productId)
            if (productData) {
                productData.qty++
            } else {
                state.data.push({ productId: payload.productId, qty: 1 })
            }
            state.total += Number(payload.finalPrice)
            localStorage.setItem("cart-data", JSON.stringify(state.data));
            localStorage.setItem("cart-total", state.total);

        },
        removeToCart() {

        },
        changeQty() {

        },
        lsToCart(state) {
            const cartData = localStorage.getItem("cart-data");
            const cartTotal = localStorage.getItem("cart-total");

            if (cartData) {
                state.data = JSON.parse(cartData)
                state.total = Number(cartTotal)

            }
        }


    },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeToCart, changeQty ,lsToCart} = cartSlice.actions

export default cartSlice.reducer