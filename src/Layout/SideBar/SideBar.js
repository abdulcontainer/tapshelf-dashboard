import styles from './SideBar.module.css';
import MenuList from '../../components/MenuListComponent/MenuListComponent';
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { FaRegUserCircle, FaBorderNone } from "react-icons/fa";
import { IoFileTrayFullOutline, IoSettingsOutline } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";

const menuOptions = [
  { icon: <AiOutlineHome/>, name: 'Dashboard' },
  { icon: <MdOutlineLocalGroceryStore/>, name: 'Inventery' }, 
  { icon: <TbReportAnalytics/>, name: 'Reports' }, 
  { icon: <FaRegUserCircle/>, name: 'Suppliers' }, 
  { icon: <FaBorderNone/>, name: 'Orders' }, 
  { icon: <IoFileTrayFullOutline/>, name: 'Manage Store' }, 
]

const options = [
  {icon: <IoSettingsOutline/>, name: 'Settings'},
  {icon: <LuLogOut/>, name: 'Logout'}
]
// <MenuList mainMenu={false} menu={options}/>
const SideBar = () => {
  return (
    <div className={styles.sideBarOverlay}>
      <div className={styles.sideBarWrapper}>
        <h3>TapShelf</h3>
        <MenuList mainMenu={true} menu={menuOptions}/>
        <MenuList mainMenu={false} menu={options}/>
      </div>
    </div>
  )
}

export default SideBar