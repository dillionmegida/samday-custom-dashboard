import React, { useState } from 'react';
import Styles from './Dock.module.scss';

import NavLink from '../NavLinks/NavLink';
import Links from './Links';

export default () => {       
    
    const [ isDockOpened, toggleDock ] = useState(false);

    // this refers to "settings"
    const lastLink = Links[Links.length - 1]

    return(
        <section className={`${Styles.DockSection} ${!isDockOpened ? Styles.Hidden : ''}`}>
            <div className={Styles.DockToggler}>
                {isDockOpened ? (
                    <button onClick={() => toggleDock(false)}>
                        <i className='fa fa-times'></i>
                    </button>
                ) : (
                    <button onClick={() => toggleDock(true)}>
                        <i className='fa fa-bars'></i>
                    </button>
                )}
            </div>
            <div className={Styles.LinksSection}>
                <ul className={`${Styles.Links} ${Styles.Major}`}>
                    {Links.map(({icon, name, link, extra, notifications}, index) => (
                        index !== Links.length - 1 && (
                            <NavLink
                                key={index}
                                icon={<i className={icon}></i>}
                                // Hide the name when the dock is closed
                                name={isDockOpened && name}
                                href={link}
                                activeClassName={Styles.ActiveLink}
                            >
                                {/* Display the notifications on the icons when the dock is closed */}
                                {!isDockOpened && notifications && (
                                    <div className={Styles.TinyNotifications}>
                                        {notifications}
                                    </div>
                                )}
                                {/* Display the notifications by the side of the link text when dock is opened */}
                                {isDockOpened && notifications ? (
                                    <div className={Styles.Extra}>
                                        {notifications}
                                    </div>
                                ) : null}
                            </NavLink>
                        )
                    ))}
                </ul>
                <ul className={`${Styles.Links} ${Styles.Extra}`}>
                    <NavLink
                        icon={<i className={lastLink.icon}></i>}
                        name={isDockOpened && lastLink.name}
                        href={lastLink.link}
                    />
                </ul>

            </div>
        </section>
    )
}