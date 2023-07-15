
import { FC } from 'react'
import styles from './errorMessage.module.scss'
import {BiErrorCircle} from 'react-icons/bi'


interface IErrorBlock{
    error:string
    isShow:boolean
}


const ErrorMessage:FC<IErrorBlock>=({error,isShow})=>{


    return (
        <div className={isShow?styles.errorMessage:styles.errorMessageClose}>
          <div className={styles.errorBlock}>
                <BiErrorCircle size={20}/>
            <div className={styles.errorText}>
        
                {error}
            </div>
            
        </div>  

        
        </div>
        
    )
}

export default ErrorMessage