
import styles from './emptyTodos.module.scss'
import clickBoard from '../../assets/Clipboard.png'
const EmptyBlock = ()=>{
    return (
        <div className={styles.emptyBlock}>
              <div className="container">
                        <div className={styles.emptyBlockWrapper}>

                           <img src={clickBoard} alt="" height={56} width={56} />
                           <p className={styles.content}><span>Você ainda não tem tarefas cadastradas</span> Crie tarefas e organize seus itens a fazer</p>
                        </div>
                </div>
           
        </div>
    )
}

export default EmptyBlock;