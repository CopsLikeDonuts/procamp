import React from 'react'
import Slider from '../Slider/Slider'
import './RegFeature.css'

const RegFeature = () => {
    
    return (
        <div className='reg-feature'>
        <div className='info-name'>
            <span>FEATURE 1</span>
        </div>
        <div className='info-desc'>
            <span>
            Quisque ultrices dolor at felis sollicitudin lacinia. Aliquam erat volutpat. Nulla aliquet accumsan tortor, eu volutpat sapien ultricies ut. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </span>
        </div>
        <Slider/>
        </div>
    )
} 

export default RegFeature;