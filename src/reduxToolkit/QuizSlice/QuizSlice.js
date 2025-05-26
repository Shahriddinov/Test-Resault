import { createSlice } from '@reduxjs/toolkit';
import {fetchQuizzesBySubject} from "./index";

const quizSlice = createSlice({
    name: 'quiz',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {
        clearQuizState: (state) => {
            state.data = [];
            state.loading = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchQuizzesBySubject.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchQuizzesBySubject.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchQuizzesBySubject.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

// 🔹 Export reducer and actions
export const { clearQuizState } = quizSlice.actions;
export default quizSlice.reducer;