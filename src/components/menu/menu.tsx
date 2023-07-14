import { FC } from 'react';
import styles from './menu.module.scss'
import MenuItem from '../../ui/menuItem/menu';
import { ITodos } from '../todoItems/todoItems';

const Menu:FC<ITodos> = ({items})=>{
    const completedItems=items?.filter(item=>item.completed==true)
        console.log(completedItems)
    
    return (
        <div className={styles.menu}>
              <div className="container">
                        <div className={styles.menuWrapper}>

                            <MenuItem color='blue' count={items?.length} text='All tasks' class='textBlue'/>
                            <MenuItem color='purple' count={items?.length} text='Done' couterComplete={completedItems?.length}/>
                        </div>
                </div>
           
        </div>
    )
}

export default Menu;