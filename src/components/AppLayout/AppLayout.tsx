import React, { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { RouteNames } from '../../app/router'
import styles from './AppLayout.module.css';
import logoutIcon from '../../assets/images/logout.webp'
import logo from '../../assets/images/logo.png'
import searchIcon from '../../assets/images/search.webp'
import { useAuthStore } from '../../app/store/auth';

interface Props {
    children: ReactNode
}
const AppLayout: FC<Props> = ({ children }) => {
    const logout = useAuthStore(store => store.logout)
    return (
        <div className={styles.app}>
            <div className={styles.navigationBar}>
                <div className={`${styles.logoRow} ${styles.navItem}`}>
                <img src={logo} alt="" className={` ${styles.logo}`} />
                <div className={styles.logoText}>KravAssist</div>
                <div className={styles.logoVersion}>v.01</div>
                </div>

               
                <Link to={RouteNames.realEstateSearch} className={styles.navItem}>
                    {<img src={searchIcon} alt="" className={`${styles.searchIcon} ${styles.navIcon}`}  />}
                   <div className={styles.navText}>Поиск</div> 
                </Link>

                <div 
                onClick={logout}
                className={`${styles.logout} ${styles.navItem}`}>
                    {<img src={logoutIcon} alt="" className={styles.navIcon}  />}
                   <div className={styles.navText}>Выйти</div> 
                </div>
            </div>
            <div className={styles.main}>
                {/*    <div className="mainContainer"></div> */}
                {children}
            </div>

        </div>
    )
}

export default AppLayout
