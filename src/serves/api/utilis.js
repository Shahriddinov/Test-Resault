const baseUrl = process.env.REACT_APP_API_ROOT



export const SIGN_UP= `${baseUrl}/users/register`
export const SIGN_IN= `${baseUrl}/accounts/login`
export const COURSES_LIST= `${baseUrl}/subjects/all`
export const QUIZ_LIST= `${baseUrl}/tests/all-test-in-subjects`
export const QUIZ_ANSWERS= `${baseUrl}/user-answers`