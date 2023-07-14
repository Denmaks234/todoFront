import {FC} from 'react' 
import styles from  './menu.module.scss'



interface IMenu {
    color : 'blue' | 'purple';
    text: string
    count:number|undefined
    couterComplete?:number
    class?:string
}

const MenuItem : FC<IMenu>  = (props)=>{

    return(
        <div className={styles.menuItem}>
        <p style={ {color: props.color==='blue'?'#4EA8DE':'#8284FA'}} className={props.color==='blue'?styles.textBlue:styles.textPurple}>{props.text}</p>
        <div className={ props.color==='blue'?styles.counter:styles.counterRad }>{props.couterComplete || props.color=='purple' ? `${props.couterComplete} de ${props.count}`:props.count}</div>
        </div>
    );




       

  
    }

export default MenuItem