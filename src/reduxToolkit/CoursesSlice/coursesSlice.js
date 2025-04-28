import { createSlice } from '@reduxjs/toolkit';
import {CoursesList} from "./index";

const coursesSlice = createSlice({
    name: 'courses',
    initialState: {
        data: [],
        totalCount: 0,
        loading: false,
        error: null,
        skip: 0,
        take: 10,
    },
    reducers: {
        setPage: (state, action) => {
            state.skip = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(CoursesList.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(CoursesList.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload?.data || [];
                state.totalCount = action.payload?.total || 0;
            })
            .addCase(CoursesList.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { setPage } = coursesSlice.actions;

export default coursesSlice.reducer;
