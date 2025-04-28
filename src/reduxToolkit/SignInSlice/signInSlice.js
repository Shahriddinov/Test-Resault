import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from './index';

const signInSlice = createSlice({
    name: 'login',
    initialState: {
        loading: false,
        error: null,
        user: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload?.message || 'Xatolik yuz berdi';
            });
    },
});

export default signInSlice.reducer;