
import styles from './emptyTodos.module.scss'
import clickBoard from '../../assets/Clipboard.png'
const EmptyBlock = ()=>{
    return (
        <div className={styles.emptyBlock}>
              <div className="container">
                        <div className={styles.emptyBlockWrapper}>

                           <img src={clickBoard} alt="" height={56} width={56} />
                           <p className={styles.content}><span>Ooo,you dont have tasks</span>Please write a task in the main input</p>
                        </div>
                </div>
           
        </div>
    )
}

export default EmptyBlock;