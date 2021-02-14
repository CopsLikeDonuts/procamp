import React from 'react';
import './Text.css';

const Text = (props) => {
    return (
        <div className='info-desc'>
            <span>{props.texts}</span>
        </div>
    )
}

export default Text;