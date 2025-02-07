import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'Cart',
    initialState: {
        data: [],
        total: 0,
        original_total: 0
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
            state.original_total += Number(payload.originalPrice)
            localStorage.setItem("cart-data", JSON.stringify(state.data));
            localStorage.setItem("cart-total", state.total);
            localStorage.setItem("original-total", state.original_total);

        },
        removeToCart() {

        },
        changeQty() {

        },
        lsToCart(state) {
            const cartData = localStorage.getItem("cart-data");
            const cartTotal = localStorage.getItem("cart-total");
            const originalTotal = localStorage.getItem("original-total");

            if (cartData) {
                state.data = JSON.parse(cartData)
                state.total = Number(cartTotal)
                state.original_total = Number(originalTotal)

            }
        },
        emptyCart(state) {
            state.data = []
            state.total = 0
            state.original_total = 0
            localStorage.removeItem("cart-data");
            localStorage.removeItem("cart-total");
            localStorage.removeItem("original-total");
        },
        dbToCart(state, { payload }) {
            state.data = payload.data
            state.total = payload.total
            state.original_total = payload.original_total
            localStorage.setItem("cart-data", JSON.stringify(state.data));
            localStorage.setItem("cart-total", state.total);
            localStorage.setItem("original-total", state.original_total);
        }


    },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeToCart, changeQty, lsToCart, emptyCart, dbToCart } = cartSlice.actions

export default cartSlice.reducer