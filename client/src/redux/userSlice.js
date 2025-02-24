import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    currentUSer: null,
    error : null,
    loading: false
};
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userSigninRequest: (state) => {
            state.loading = true;
        },
        userSigninSuccess: (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
        },
        userSigninFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});
 
export const { userSigninRequest, userSigninSuccess, userSigninFailure } = userSlice.actions;
export default userSlice.reducer;
    
