import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Nav () {
    return (
        <>
            <nav className="navBar">
                <ul>
                    <li><Link to='/'>Employees</Link></li>
                    <li><Link to='Teams'>Teams</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}