import {createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {QUIZ_ANSWERS} from "../../serves/api/utilis";

export const submitQuizAnswers = createAsyncThunk(
    'quizAnswers/submit',
    async ({ userID, testID, answers }, thunkAPI) => {
        try {
            const response = await axios.post(`${QUIZ_ANSWERS}`, {
                userID,
                testID,
                answers
            });
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || error.message);
        }
    }
);