
import styles from './mainInput.module.scss'
import {RefObject, FC  } from 'react';

interface IInput{
    inputRef:RefObject<HTMLInputElement>
    setTitle:(title:string)=>void,
    title:string

}

const Input:FC<IInput> = (props)=>{
    return (
        <div className={styles.InputBlock}>
            <input type="text" ref={props.inputRef} placeholder='Adicione uma nova tarefa' onChange={(e)=>props.setTitle(e.target.value)} className={styles.input} value={props.title} />
        </div>
    )
}

export default Input;