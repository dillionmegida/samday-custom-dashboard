import React from 'react';
import { NavLink, BrowserRouter as Router, Link } from 'react-router-dom'

export default ({icon, name, href, activeClassName, children}) => {
    return (
        <li>
            <NavLink
                to={href}
                activeClassName={activeClassName}
            >
                <span>
                    {icon}
                </span>
                {name}
                {children}
            </NavLink>
        </li>
    )
}