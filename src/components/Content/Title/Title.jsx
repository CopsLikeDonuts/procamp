import React from 'react';
import './Title.css';

const Title = (props) => {
    return (
        <div className='info-title'>
            <span>{props.titles}</span>
        </div>
    )
}

export default Title;