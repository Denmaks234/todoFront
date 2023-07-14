

import styles from './logo.module.scss'
import logoIcon from '../../assets/logo-todo.png'

const Logo = ()=>{
    return(
        <div className={styles.logo}>
        <img src={logoIcon} alt="icon" />
        <h1 className={styles.logoTitle}><span>lo</span>go</h1>
    </div>
    )
    
}

export default Logo;