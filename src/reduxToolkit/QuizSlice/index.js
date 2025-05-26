import {createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {QUIZ_LIST} from "../../serves/api/utilis";

export const fetchQuizzesBySubject = createAsyncThunk(
    'quizzes/fetchBySubject',
    async ({ subjectId }, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${QUIZ_LIST}/${subjectId}`
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message || 'Failed to fetch quizzes');
        }
    }
);