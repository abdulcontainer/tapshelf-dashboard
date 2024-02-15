import { ListItemIcon, ListItemText, MenuItem, MenuList } from '@mui/material';
import styles from './MenuListComponent.module.css';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const MenuListComponent = ({menu, mainMenu}) => {
  const navigate = useNavigate()
  const url = useLocation()
  const [ activePage, setActivePage ] = useState(url.pathname)

  const handleClick = (item) => {
    navigate(item.link)
    setActivePage(item.link)
  }

  console.log(activePage)
  return (
    <MenuList className={`${styles.menuOverlay} ${mainMenu ? styles.mainMenuStyle : ''}`}>
      {menu?.map((item, index) => (
        <MenuItem
          key={index}
          className={`${styles.menuItem} ${mainMenu && activePage == item.link ? styles.activePageStyle : '' }`}
          onClick={() => {mainMenu && item.link &&  handleClick(item) }}
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