import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav({userInfo}) {
    return (
        <div className="nav-bar">
            <ul>
                <li>
                    <NavLink to={'/home'}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/profile'}>Profile</NavLink>
                </li>
                <li>
                    <NavLink to={'/ideahub'}>Idea hub</NavLink>
                </li>
                <li className="post-project">
                    <NavLink to={'/createpost'}>Post a project</NavLink>
                </li>
            </ul>
        </div>
    )
}
