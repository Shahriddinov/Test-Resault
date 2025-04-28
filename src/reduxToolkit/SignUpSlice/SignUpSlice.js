import { createSlice } from '@reduxjs/toolkit';
import { addSignUp } from '../SignUpSlice/index'; // sizda thunk shu joyda bo'lishi kerak

const initialState = {
    loading: false,
    error: null,
    errorDetails: null,
    statusCode: null,
    data: null,
};

const SignUpSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        clearAuthState: (state) => {
            state.loading = false;
            state.error = null;
            state.errorDetails = null;
            state.statusCode = null;
            state.data = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addSignUp.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.errorDetails = null;
                state.statusCode = null;
            })
            .addCase(addSignUp.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(addSignUp.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload?.message || 'Xatolik yuz berdi';
                state.errorDetails = action.payload?.errors || null;
                state.statusCode = action.payload?.status || null;
            });
    },
});

export const { clearAuthState } = SignUpSlice.actions;
export default SignUpSlice.reducer;
