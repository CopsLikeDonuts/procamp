import React from 'react';
import './LogoFeature.css';

const LogoFeature = (props) => {
    const logos = props.state.logosData;
    const logosFrame = logos.map((logo, index) => {
        const src = './logos/' + logo + '.svg'
        return <img src={src} alt={logo} key={index}></img>
    });
    return (
        <div className='reg-feature'>
            <div className='info-name'>
                <span>some logos</span>
            </div>
            <div className='logos'>
                {logosFrame}
            </div>
        </div>
    )
}

export default LogoFeature;
