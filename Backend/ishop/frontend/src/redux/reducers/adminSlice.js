import { createSlice } from '@reduxjs/toolkit'

export const adminSlice = createSlice({
    name: 'Admin',
    initialState: {
        data: null,
        token: null
    },
    reducers: {
        login(state, action) {
            state.data = action.payload.data;
            state.token = action.payload.token;
            localStorage.setItem("admin", JSON.stringify(action.payload.data));
            localStorage.setItem("admin-token", action.payload.token);
            localStorage.setItem("adminTimeStamp", new Date().getTime())
        },
        logout(state) {
            state.data = null;
            localStorage.removeItem("admin")
            localStorage.removeItem("adminTimeStamp")

        },
        lsToAdmin(state, action) {

            state.data = action.payload.data
            state.token = action.payload.token
        }

    },
})

// Action creators are generated for each case reducer function
export const { login, lsToAdmin, logout } = adminSlice.actions

export default adminSlice.reducer