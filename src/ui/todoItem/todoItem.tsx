import {FC} from 'react' 
import styles from  './todoItem.module.scss'
import falseIcon from '../../assets/falseChecked.svg'
import trueIcon from '../../assets/trueChecked.svg'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {MdDelete} from 'react-icons/md'
import {FiEdit} from 'react-icons/fi'
import {IoMdClose} from 'react-icons/io'
import { useState } from 'react';
import { useDeleteTodoMutation,useUpdateTodoMutation } from '../../services/todo.service'

export interface ITodoItem {
   id?:number
   completed:boolean;
   title:string;
   descr?:string,
   userId?:number,
   time?:string,
   token:string|null
   setUpdate?:(isUpdate:boolean)=>void;
   addFocus?:()=>void
   setActiveId?:(activeId:number)=>void;
}




const TodoItem : FC<ITodoItem>  = (props) => {

    const [IsShowed, setShowed] = useState(false);
   const [deleteTodo,{}]=useDeleteTodoMutation()
   const [updateTodo,{}]=useUpdateTodoMutation()
   const token=localStorage.getItem('token')
    const update =()=>{
        props.setUpdate?props.setUpdate(true):null
        if(props.addFocus){
            props.addFocus()
        }
        props.setActiveId?props.setActiveId(props.id?props.id:0):null
        setShowed(false)
    }
    
    const OnDeleteTodo=()=>{
        deleteTodo(props.id)
        setShowed(false)
    }

    const onChangeTrueComplete =()=>{
        updateTodo({
            title:props.title,
            completed:false,
            token,
            id:props.id,
        })
    }

    const onChangeFalseComplete = () =>{
        updateTodo({
            title:props.title,
            completed:true,
            token,
            id:props.id,
        })
    }


    return(
        <div className={styles[props.completed?"trueComplete":"falseComplete"]}>
        {props.completed?<img src={trueIcon} alt="" onClick={onChangeTrueComplete} />:<img src={falseIcon} alt="" onClick={onChangeFalseComplete} />}
        <p className={styles.descr}>{props.title}</p>
        <button className={styles.image} onClick={()=>{setShowed(true)}}><BsThreeDotsVertical className={styles.deleteIcon} size={20}/></button>
        <div className={IsShowed?styles.smenu:styles.menu}>
            <button className={styles.deleteBtn } onClick={OnDeleteTodo}><MdDelete size={20}/></button>
            <button className={styles.updateBtn} onClick={update} > <FiEdit  size={20}/></button>
            <button  className={styles.closeBtn}> <IoMdClose size={18} onClick={()=>{setShowed(false)}} /></button>
        </div>

        </div>
    )

}

export default TodoItem