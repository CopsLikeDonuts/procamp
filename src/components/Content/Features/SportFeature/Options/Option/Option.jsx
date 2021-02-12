import React from 'react';
import './Option.css';

const Option = (props) => {
    return (
        <div className='option'>
            <p className='option-title'>{props.title}</p>
            <img src={props.image} alt={props.alt}></img>
            <p className='option-desc'>{props.desc}</p>
        </div>
    )
}

export default Option;