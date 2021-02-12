import React from 'react';
import './ProfileFeature.css';
import Slider from '../Slider/Slider';

const ProfileFeature = (props) => {
    return (
        <div className='reg-feature'>
            <div className='info-name'>
                <span>FEATURE 3</span>
            </div>
            <div className='info-desc'>
                <span>
                Maecenas condimentum sem mattis ligula vestibulum, sit amet mollis dui tristique. Integer viverra lectus vitae molestie congue. In hac habitasse platea dictumst. Sed vel ante enim. Quisque bibendum lacus a mattis euismod.
                </span>
            </div>
            <Slider state={props.state.friendsData}/>
        </div>
    )
}

export default ProfileFeature;