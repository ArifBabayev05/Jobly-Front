import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn:false,
    email:null,
    userName:null,
    userId:null,
}

const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    SET_ACTIVE_USER:(state ,action) =>{
        
    }
  }
});

export const {SET_ACTIVE_USER} = AuthSlice.actions

export const selectIsLoggedIn = (state) => state.Auth.isLoggedIn;
export const selectEmail = (state) => state.Auth.email;
export const selectUserName = (state) => state.Auth.userName;
export const selectUserId = (state) => state.Auth.userId;

export default AuthSlice.reducer