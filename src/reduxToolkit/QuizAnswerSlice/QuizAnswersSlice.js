import { createSlice } from "@reduxjs/toolkit";
import {submitQuizAnswers} from "./index"


const quizAnswerSlice = createSlice({
    name: 'quizAnswers',
    initialState: {
        answers: [],
        userID: null,
        testID: null,
        status: 'idle',
        error: null,
        result: null
    },
    reducers: {
        saveAnswer(state, action) {
            const { questionID, answerID, answerText } = action.payload;
            const existing = state.answers.find(a => a.questionID === questionID);
            if (existing) {
                existing.answerID = answerID;
                existing.answerText = answerText;
            } else {
                state.answers.push({ questionID, answerID, answerText });
            }
        },
        setUserAndTestID(state, action) {
            state.userID = action.payload.userID;
            state.testID = action.payload.testID;
        },
        resetAnswers(state) {
            state.answers = [];
            state.userID = null;
            state.testID = null;
            state.status = 'idle';
            state.error = null;
            state.result = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(submitQuizAnswers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(submitQuizAnswers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.result = action.payload;
            })
            .addCase(submitQuizAnswers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    }
});

export const { saveAnswer, resetAnswers, setUserAndTestID } = quizAnswerSlice.actions;

export default quizAnswerSlice.reducer;