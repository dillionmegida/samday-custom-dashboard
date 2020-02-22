import React from 'react';
import Styles from './Header.module.scss';

import NavLink from '../NavLinks/NavLink';
import Brand from '../Brand/Details';
import UserImg from '../../assets/me.jpg';

export default () => {
    return(
        <header className={Styles.Header}>
            {/* <img s */}
            AAA
            <div className={Styles.HeaderMenus}>
                <div className={Styles.Search}>
                    <i className='fa fa-search'></i>
                </div>
                <div className={Styles.UserLinks}>
                    <div>
                        <i className='fa fa-envelope'></i>
                        <span className={Styles.TinyNotifications}>5</span>
                        Message
                    </div>
                    <div className={Styles.Dropdown}>
                        <a href='#'>
                            <i className='fa fa-shopping-cart'></i>Market Place <i className='fa fa-caret-down'></i>
                            <span className={Styles.TinyNotifications}>1</span>
                        </a>
                    </div>
                    <div>
                        <i className='fa fa-bars'></i> Notifications
                        <span className={Styles.TinyNotifications}>1</span>
                    </div>
                </div>
                <div className={Styles.UserIcon}>
                    {/* Using a button for the icon so that it can be tababble */}
                    <button>
                        <img src={UserImg} alt='User Icon' />
                        Me <i className='fa fa-caret-down'></i>
                    </button>
                </div>
            </div>
        </header>
    )
}