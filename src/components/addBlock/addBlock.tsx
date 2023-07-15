
import { useCreateTodoMutation, useUpdateTodoMutation } from '../../services/todo.service';
import Button from '../../ui/main-button/Button';
import Input from '../../ui/mainInput/mainInput';
import styles from './addBlock.module.scss'
import { FC, useEffect, useState } from 'react';
import {RefObject  } from 'react';
import ErrorMessage from '../Errormessage/errorMessage';


interface IAddBlock{

    isUpdate:boolean;
    textInput:RefObject<HTMLInputElement>
    setUpdate:(isUpdate:boolean)=>void;
    activeId:number
}


const AddBlock:FC<IAddBlock> = (props) =>{
    
    const [title,setTitle]=useState('')
    const token = localStorage.getItem('token')
    const [createTodo,{error,isError}]=useCreateTodoMutation()
    const [updateTodo,{error:updateError,isError:updateIsError}]=useUpdateTodoMutation()
    const [isShow,setIsShow]=useState(false)
    const [errorMessage,setErrorMessage]=useState('')


    useEffect(()=>{
        if(error){
            if('data' in error) {
               setErrorMessage(String(error.data))
               setIsShow(true)
               setTimeout(()=>{setIsShow(false)},5000)
            }
        }
        if(updateError){
            if('data' in updateError) {
               setErrorMessage(String(updateError.data))
               setIsShow(true)
               setTimeout(()=>{setIsShow(false)},5000)
            }
        }
       
    
    },[isError,updateIsError])

    const onClickAdd=()=>{
        createTodo({
            title,
            completed:false,
            token,
           
        })
        setTitle('')
    }

    const onClickUpdate=()=>{


        updateTodo({
            title,
            completed:false,
            token,
            id:props.activeId,
        })
        setTitle('')
    }

    
    
    return (
        <div className={styles.addBlock}>
              <div className="container">
                <div className={styles.addBlockWrapper}>
                    <Input inputRef={props.textInput} setTitle={setTitle} title={title} />
                    <Button isError={updateIsError} setUpdate={props.setUpdate} onClickAdd={onClickAdd} onClickUpdate={onClickUpdate} isUpdate={props.isUpdate}/>
                </div>
                    
                </div>
                <ErrorMessage error={errorMessage} isShow={isShow}/>
        </div>
    )
}

export default AddBlock;