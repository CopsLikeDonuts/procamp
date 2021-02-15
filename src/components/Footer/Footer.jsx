import React from 'react';
import './Footer.css';
import Title from '../Content/Title/Title';

const Footer = (props) => {
    return (
        <>
            <Title titles={props.titles}/>
            <img src='logo.png' className='footer-logo' alt='footer-logo'></img>
        </>
    )
}

export default Footer;