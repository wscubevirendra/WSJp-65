import { configureStore } from '@reduxjs/toolkit'
import adminSlice from './reducers/adminSlice'
import cartSlice from './reducers/cartSlice'
import userSlice from './reducers/userSlice'

const store = configureStore({
    reducer: {
        admin: adminSlice,
        cart: cartSlice,
        user: userSlice
    },
})


export default store
