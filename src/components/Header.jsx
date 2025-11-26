import React, { useState } from 'react';
import '../styles/components/Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav>
            <div className="nav__header">
                <a href="#" className="nav__logo">
                    <div className="logo">Jad<span>oo</span>.</div>
                </a>
                <div
                    className="nav__menu__btn"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <i className="ri-menu-line"></i>
                </div>
            </div>
            <ul className={`nav__links ${isMenuOpen ? 'open' : ''}`}>
                <li><a href="#destinations">Destinations</a></li>
                <li><a href="#hotels">Hotels</a></li>
                <li><a href="#flights">Flights</a></li>
                <li><a href="#bookings">Bookings</a></li>
                <li><a href="#login">Login</a></li>
                <li><a href="#signup" className="signup-btn">Sign up</a></li>
            </ul>
        </nav>
    );
};

export default Header;