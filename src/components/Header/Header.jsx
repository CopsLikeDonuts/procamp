import React from 'react';
import './Header.css';

const Header = () => {
    return(
        <div className='header'>
            <img src='logo.png' alt='header-logo' className='header-logo'></img>
            <div className='menu-bar'>
                <p>HOME</p>
                <p>PROJECTS</p>
                <p>OUR TEAM</p>
                <p>CONTACT US</p>
            </div>
        </div>
    );
}

export default Header;