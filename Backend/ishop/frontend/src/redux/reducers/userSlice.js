import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'User',
    initialState: {
        data: null,
        token: null
    },
    reducers: {
        login(state, action) {
            state.data = action.payload.data;
            state.token = action.payload.token;
            localStorage.setItem("user", JSON.stringify(action.payload.data));
            localStorage.setItem("user-token", action.payload.token);
        },
        logout(state) {
            state.data = null;
            state.token = null;
            localStorage.removeItem("user")
            localStorage.removeItem("user-token")

        },
        lsToUser(state) {
            const lsUser = localStorage.getItem("user");
            const lsToken = localStorage.getItem("user-token");
            if (lsUser && lsToken) {
                state.data = JSON.parse(lsUser)
                state.token = lsToken
            }

        }

    },
})

// Action creators are generated for each case reducer function
export const { login, lsToUser, logout } = userSlice.actions

export default userSlice.reducer