import styles from './todoItems.module.scss'
import TodoItem, { ITodoItem } from '../../ui/todoItem/todoItem';
import {FC} from 'react' 
import EmptyBlock from '../emptyTodos/emptyTodos';


export interface ITodos{
    items:ITodoItem[]|undefined;
    setUpdate?:(isUpdate:boolean)=>void;
    addFocus?:()=>void
    setActiveId?:(activeId:number)=>void;
}

const TodoItems:FC<ITodos> = (props)=>{
    return (
        <div className={styles.todoItems}>
              <div className="container">

                    {props.items?.length ? props.items.map((item)=>( <TodoItem token={null} setActiveId={props.setActiveId} id={item.id} completed={item.completed} addFocus={props.addFocus} setUpdate ={props.setUpdate}title={item.title}/>)):<EmptyBlock/>}
                </div>
           
        </div>
    )
}

export default TodoItems;