import React from 'react'
import Slider from '../Slider/Slider'
import './RegFeature.css';
import Title from '../../Title/Title';
import Text from '../../Text/Text';

const RegFeature = (props) => {
    
    return (
        <div className='info-block'>
            <Title titles={props.titles}/>
            <Text texts={props.texts}/>
            <Slider state={props.state.regData}/>
        </div>
    )
} 

export default RegFeature;