import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITodoItem } from "../ui/todoItem/todoItem";




export const todoApi=createApi({
    reducerPath:'todos',
    baseQuery:fetchBaseQuery({baseUrl:'https://todoserver-production-93e7.up.railway.app/api'}),
    tagTypes: ['todos'],
    endpoints:(builder)=>({
        getTodos:builder.query<ITodoItem[],string|null>({
            query:(token)=>({
                url:'/todos',
                method:"GET",
                headers:{
                    'Autorization':`Berear ${token}`
                }
                
            }),
            providesTags:['todos']
        }),
        createTodo:builder.mutation<ITodoItem[],ITodoItem>({
            
            query:(arg)=>({
                
                url:'/createTodo',
                method:"POST",
                body:arg,
                headers:{
                    'Autorization':`Berear ${arg.token}`
                }
            }
            ),
            invalidatesTags:['todos']
        }),
        deleteTodo:builder.mutation<ITodoItem[],number|undefined>({
            query:(id)=>({
                url:`/delete/${id}`,
                method:'DELETE',

            }),
            invalidatesTags:['todos']
        }),
        updateTodo:builder.mutation<ITodoItem[],ITodoItem>({
            query:(arg)=>({
                url:`/updateTodo/${arg.id}`,
                method:"PUT",
                body:arg,
                headers:{
                    'Autorization':`Berear ${arg.token}`
                }
            }),
            invalidatesTags:['todos']
        })
    })
})


export const {useGetTodosQuery,useCreateTodoMutation,useDeleteTodoMutation,useUpdateTodoMutation} = todoApi