
import styles from './Home.module.scss'
import Header from '../../components/header/header';
import AddBlock from '../../components/addBlock/addBlock';
import Menu from '../../components/menu/menu';
import TodoItems from '../../components/todoItems/todoItems';
import { useState,useRef,RefObject, FC,useEffect  } from 'react';
import { ITodoItem } from '../../ui/todoItem/todoItem';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector';
import { IUserData, useGetUserQuery } from '../../services/auth.service';
import { IAuth } from '../../store/authSLice';
import { useGetTodosQuery } from '../../services/todo.service';




const HomePage  = (  ) =>{

    const [isUpdate, setIsUpdate] = useState(false);
    const [activeId,setActiveId]=useState(0)
    const inputRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
    const navigate=useNavigate()
    const token=localStorage.getItem('token')
    const {isError }= useGetUserQuery(token)
    const {data}=useGetTodosQuery(token)
    
   


    const addFocus = () =>{
        inputRef.current?.focus()
    }

    useEffect(()=>{
    if(isError  ){
        navigate('/login')
        return
    }
    },[isError])
   
        return(
            <>
            <Header/>
            <AddBlock setUpdate={setIsUpdate}  textInput={inputRef} isUpdate={isUpdate} activeId={activeId}/>
            <Menu items={data} />
            <TodoItems addFocus={addFocus} setActiveId={setActiveId} setUpdate={setIsUpdate} items={data}/>
    
            </>
            
        )
    }





export default HomePage