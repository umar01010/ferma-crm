import React from 'react'
import { NavLink } from "react-router-dom";

const NavbarLink = ({ text, icon, href }) => {
    return (
        <li>
            <NavLink className="navbar_link" to={href}>
                <span className="navbar_icon">{icon}</span>
                <p className="navbar_text">{text}</p>
            </NavLink>
        </li>
    )
}

export default NavbarLink
