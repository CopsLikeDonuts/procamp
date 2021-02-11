import React from 'react';
import './Header.css';

const Header = () => {
    return(
        <div className='header'>
            <img src='logo.png' alt='header-logo' className='header-logo'></img>
            <div className='menu-bar'>
                <a>HOME</a>
                <a>PROJECTS</a>
                <a>OUR TEAM</a>
                <a>CONTACT US</a>
            </div>
        </div>
    );
}

export default Header;