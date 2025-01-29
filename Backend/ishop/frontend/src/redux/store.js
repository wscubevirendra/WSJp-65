import { configureStore } from '@reduxjs/toolkit'
import adminSlice from './reducers/adminSlice'
import cartSlice from './reducers/cartSlice'

const store = configureStore({
    reducer: {
        admin: adminSlice,
        cart: cartSlice
    },
})


export default store
