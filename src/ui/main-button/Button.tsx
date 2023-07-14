

import { AiOutlinePlusCircle,AiFillEdit } from 'react-icons/ai';
import styles from './Button.module.scss'
import { FC } from 'react';


interface IButoon{
    isUpdate:boolean;
    setUpdate:(isUpdate:boolean)=>void;
    onClickAdd:()=>void;
    onClickUpdate:()=>void
}

const Button:FC<IButoon> = (props)=>{

    const setUpdate = () =>{
        props.setUpdate?props.setUpdate(false):null;
    }

    return(
       <div className={props.isUpdate?styles.btnBlockEdit:styles.buttonBlock} onClick={setUpdate}>

        {!props.isUpdate?<button className={styles.button}  onClick={props.onClickAdd}>Chair</button>:
        <button className={styles.btnEdit} onClick={props.onClickUpdate}>{'Edit'}</button>}
        {props.isUpdate?<AiFillEdit className={styles.imagePlus} size='16' />:<AiOutlinePlusCircle className={styles.imagePlus} size='16'/>}

       </div>
    )
    
}

export default Button;