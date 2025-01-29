import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/counter'
const store = configureStore({
    reducer: {
        counter: counterSlice,
        comment: counterSlice,
        admin: counterSlice,
        cart: counterSlice,
    },
})


export default store