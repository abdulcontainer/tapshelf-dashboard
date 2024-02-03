import Drawer from '@mui/material/Drawer';
import SideBar from '../../Layout/SideBar/SideBar';

const DrawerMenu = ({open, close}) => {
  return (
    <Drawer
      open={open}
      onClose={close}
    >
      <SideBar/>
    </Drawer>
  )
}

export default DrawerMenu