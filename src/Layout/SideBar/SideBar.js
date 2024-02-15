import styles from './SideBar.module.css';
import MenuList from '../../components/MenuListComponent/MenuListComponent';
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { FaRegUserCircle, FaBorderNone } from "react-icons/fa";
import { IoFileTrayFullOutline, IoSettingsOutline } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';

const menuOptions = [
  { icon: <AiOutlineHome/>, name: 'Dashboard', link: '' },
  { icon: <MdOutlineLocalGroceryStore/>, name: 'Inventery', link: '/' }, 
  { icon: <TbReportAnalytics/>, name: 'Reports', link:'' }, 
  { icon: <FaRegUserCircle/>, name: 'Suppliers', link: '' }, 
  { icon: <FaBorderNone/>, name: 'Orders', link:'' }, 
  { icon: <IoFileTrayFullOutline/>, name: 'Manage Store', link:'' },
  { icon: <IoFileTrayFullOutline/>, name: 'Higher Order', link:'/higher-order' }, 
]

const options = [
  {icon: <IoSettingsOutline/>, name: 'Settings'},
  {icon: <LuLogOut/>, name: 'Logout'}
]

// <MenuList mainMenu={false} menu={options}/>
const SideBar = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.sideBarOverlay}>
      <div className={styles.sideBarWrapper}>
        <h3 onClick={() => navigate('/')}>TapShelf</h3>
        <MenuList mainMenu={true} menu={menuOptions}/>
        <MenuList mainMenu={false} menu={options}/>
      </div>
    </div>
  )
}

export default SideBar