import React from 'react';
import './BackButton.css'

const BackButton = () => {
    return (
        <div className='back-navigator'>
            <img src='arrow.png' alt='arrow' id='back-arrow'></img>
            <span>Back</span>
        </div>
        
    )
}

export default BackButton