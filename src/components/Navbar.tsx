import React from "react";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
    return (
        <nav className="navbar purple darken-2">
            <div className="nav-wrapper px1">
                <Link to="/" className="brand-logo">React TypeScript</Link>
                <ul className="right hide-on-med-and-down">
                    <li><Link to="/">Список дел</Link></li>
                    <li><Link to="/about">Информация</Link></li>
                </ul>
            </div>
        </nav>
    )
}