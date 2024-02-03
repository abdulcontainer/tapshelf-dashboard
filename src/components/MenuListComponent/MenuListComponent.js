import { ListItemIcon, ListItemText, MenuItem, MenuList } from '@mui/material';
import styles from './MenuListComponent.module.css';
import { useState } from 'react';

const MenuListComponent = ({menu, mainMenu}) => {
  const [ activePage, setActivePage ] = useState('Inventery')
  
  return (
    <MenuList className={`${styles.menuOverlay} ${mainMenu ? styles.mainMenuStyle : ''}`}>
      {menu?.map((item, index) => (
        <MenuItem
          key={index}
          className={`${styles.menuItem} ${mainMenu && activePage == item.name ? styles.activePageStyle : '' }`}
          onClick={() => {mainMenu && setActivePage(item.name)}}
        >
          <ListItemIcon>
            {item.icon}
          </ListItemIcon>
          <ListItemText>{item.name}</ListItemText>
        </MenuItem>
      ))}
    </MenuList>
  )
}

export default MenuListComponent