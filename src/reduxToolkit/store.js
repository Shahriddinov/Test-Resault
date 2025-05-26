import { configureStore } from "@reduxjs/toolkit";
import SignUpSlice from "./SignUpSlice/SignUpSlice";
import SignInSlice from "./SignInSlice/signInSlice";
import CoursesSlice from "./CoursesSlice/coursesSlice";
import quizSlice from "./QuizSlice/QuizSlice";
import quizAnswerSlice from "./QuizAnswerSlice/QuizAnswersSlice"
const store = configureStore({
    reducer: {
        SignUpSlice,
        SignInSlice,
        CoursesSlice,
        quizSlice,
        quizAnswerSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})
export default  store;