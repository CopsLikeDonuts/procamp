import React from 'react';
import './Options.css';
import Option from './Option/Option';

const Options = (props) => {
    const options = props.options;
    let optionElements = options.map((option, index) => {
        return <Option title={option.title}
                       image={option.image}
                       alt={option.alt}
                       desc={option.desc}
                       key={index}
                       >    
                       </Option>
    })

    return (
        <div className='options-wrapper'>
            {optionElements}
        </div>
    )
}

export default Options


