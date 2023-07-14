
import { useCreateTodoMutation, useUpdateTodoMutation } from '../../services/todo.service';
import Button from '../../ui/main-button/Button';
import Input from '../../ui/mainInput/mainInput';
import styles from './addBlock.module.scss'
import { FC, useState } from 'react';
import {RefObject  } from 'react';


interface IAddBlock{

    isUpdate:boolean;
    textInput:RefObject<HTMLInputElement>
    setUpdate:(isUpdate:boolean)=>void;
    activeId:number
}


const AddBlock:FC<IAddBlock> = (props) =>{
    
    const [title,setTitle]=useState('')
    const token = localStorage.getItem('token')
    const [createTodo]=useCreateTodoMutation()
    const [updateTodo,{}]=useUpdateTodoMutation()
    
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
                    <Button setUpdate={props.setUpdate} onClickAdd={onClickAdd} onClickUpdate={onClickUpdate} isUpdate={props.isUpdate}/>
                </div>
                    
                </div>
           
        </div>
    )
}

export default AddBlock;