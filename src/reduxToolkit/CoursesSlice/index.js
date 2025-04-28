import {createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {COURSES_LIST} from "../../serves/api/utilis"
export const CoursesList = createAsyncThunk(
    'courses/fetchCourses',
    async ({ skip = 0, take = 10 }, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${COURSES_LIST}?skip=${skip}&take=${take}`);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response?.data || err.message);
        }
    }
);