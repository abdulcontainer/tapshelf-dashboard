import styles from './Layout.module.css';
import SideBar from './SideBar/SideBar';
import TopBar from './TopBar/TopBar';

const Layout = ({children}) => {
  return (
    <div className={styles.layoutOverlay}>
      <div className={styles.sideMenu}>
        <SideBar/>
      </div>
      <div className={styles.mainSectionOverlay}>
        <TopBar/>
        <div className={styles.mainSection}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout