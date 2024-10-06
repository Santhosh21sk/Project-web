import React from 'react';
import './Header.js';

const Header = () => {
    return (
        <header className="header">
            <h1>My Website</h1>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">Service</a></li>
                    <li><a href="#about">Feature</a></li>
                    <li><a href="#about">Product</a></li>
                    <li><a href="#about">Testimonial</a></li>
                    <li><a href="#about">FAQ</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
