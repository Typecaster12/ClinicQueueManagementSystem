import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Styles/Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="nav-container">
            <div className="logo-container">
                <NavLink to="/" className="logo">
                    Your Queue
                </NavLink>
            </div>

            <div className={`elements-container ${menuOpen ? "open" : ""}`}>
                <ul className="elements">
                    <li><NavLink to="/" className="nav-link">Home</NavLink></li>
                    <li><NavLink to="/about" className="nav-link">About</NavLink></li>
                    <li><NavLink to="/dashboard" className="nav-link">Dashboard</NavLink></li>
                    <li><NavLink to="/details" className="nav-link">Your Details</NavLink></li>
                </ul>
            </div>

            {/* Mobile hamburger */}
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
};

export default Navbar;
