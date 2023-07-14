import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './authSLice'
import { authApi } from '../services/auth.service'
import { todoApi } from '../services/todo.service'

export const store = configureStore({
  reducer: {
    authSlice:authSlice.reducer,
    [authApi.reducerPath]:authApi.reducer,
    [todoApi.reducerPath]:todoApi.reducer
  },
  
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(authApi.middleware,todoApi.middleware)

})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch