import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../services/auth.service";
export interface IAuth{
  accsess:boolean,
  token:string
}

const initialState:IAuth={
  accsess:false,
  token:''
}

export const authSlice=createSlice({
  initialState,
  name:"auth",
  reducers:{},
  extraReducers:(builder)=>{
    builder.addMatcher(authApi.endpoints.login.matchFulfilled,(state,action)=>{
    
          state.accsess=action.payload.accsess
          state.token=action.payload.token
          
    }),
    builder.addMatcher(authApi.endpoints.login.matchRejected,(state)=>{
      state.accsess=false
      state.token=''
  })
  }
})