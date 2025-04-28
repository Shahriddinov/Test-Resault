import { configureStore } from "@reduxjs/toolkit";
import SignUpSlice from "./SignUpSlice/SignUpSlice";
import SignInSlice from "./SignInSlice/signInSlice";
import CoursesSlice from "./CoursesSlice/coursesSlice";
const store = configureStore({
    reducer: {
        SignUpSlice,
        SignInSlice,
        CoursesSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})
export default  store;