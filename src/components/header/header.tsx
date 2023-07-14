
import { useNavigate } from 'react-router-dom'
import Logo from '../../ui/logo/logo'
import styles from './header.module.scss'
import {MdExitToApp} from 'react-icons/md'
const Header = ()=>{

const navigate=useNavigate()

const logout=()=>{
    localStorage.removeItem('token')
    navigate('/login')
}

    return (
        <header className={styles.header}>
              <div className="container">
                        <Logo/>
                        <MdExitToApp onClick={logout} size={20} className={styles.exitImg}/>
                </div>

        </header>
    )
}

export default Header;