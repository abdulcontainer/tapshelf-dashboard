import { useState } from 'react';
import styles from './TopBar.module.css';
import { RiSearch2Line } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import UserImage from '../../assets/user.jpg'
import DrawerMenu from '../../components/DrawerMenu/DrawerMenu';
import { Avatar, Box, IconButton, InputAdornment, MenuItem, Select, TextField } from '@mui/material';
import LangSwitcher from '../../components/LangSwitcher/LangSwitcher';
import { useTranslation } from 'react-i18next';

const TopBar = () => {
  const [ search, setSearch ] = useState('');
  const [ drawer, setDrawer ] = useState(false);

  const {t} = useTranslation()

  return (
    <Box className={styles.topBarOverlay}>
      <Box className={styles.menuIcon}>
        <IconButton onClick={() => setDrawer(!drawer)}>
          <FiMenu/> 
        </IconButton>
      </Box>
      {<DrawerMenu open={drawer} close={() => setDrawer(false)}/>}

      <TextField
        className={styles.searchBox}
        placeholder={t('search')}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        InputProps={{
          startAdornment: <InputAdornment position="start"><RiSearch2Line/></InputAdornment>,
        }}
      />
      
      <Box className={styles.userSection}>
        <LangSwitcher/>
        <IconButton>
          <IoMdNotificationsOutline/>
        </IconButton>
        <IconButton sx={{ p: 0 }}>
          <Avatar src={UserImage}
          alt='User' />
        </IconButton>
      </Box>
    </Box>
  )
}

export default TopBar