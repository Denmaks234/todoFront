import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IAuth } from '../store/authSLice'


interface IUser{
    email:string,
    password:string
}

export interface IUserData extends IUser {
    username:string
}

export const authApi=createApi({
    reducerPath:'auth',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:5000', credentials:'include'}),
    endpoints:(builder)=>({
        login:builder.mutation<IAuth,IUser>({
            query:(arg)=>({
                url:'/login',
                method:'POST',
                body:arg,
            }),
            
        }),
       signup:builder.mutation<IAuth,IUserData>({
        query:(user)=>({
            url:'/signup',
            method:"POST",
            body:user
        })
       }),

        getUser:builder.query<IUserData,string|null>({
            query:(token)=>({
                
                url:'/getUser',
                headers:{
                    'Autorization':`Berear ${token}`
                }
                
            })
            
        })
    }),
    
    
})


export const {useLoginMutation,useGetUserQuery,useSignupMutation} = authApi