import React from 'react'
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark header">
            <Link className="navbar-brand" to="/">Mastoly</Link>
            <div id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/add">Add member</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header
