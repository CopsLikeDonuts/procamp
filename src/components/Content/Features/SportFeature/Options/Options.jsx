import React from 'react';
import './Options.css';
import Option from './Option/Option';

const Options = (props) => {
    console.log(props);
    const options = props.options;
    let optionElements = options.map(option => {
        return <Option title={option.title}
                       image={option.image}
                       alt={option.alt}
                       desc={option.desc}
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


