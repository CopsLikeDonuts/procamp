import React from 'react';
import './ProfileFeature.css';
import Slider from '../Slider/Slider';
import Title from '../../Title/Title';
import Text from '../../Text/Text'

const ProfileFeature = (props) => {
    return (
        <div className='reg-feature'>
            <Title titles={props.titles}/>
            <Text texts={props.texts}/>
            <Slider state={props.state.friendsData}/>
        </div>
    )
}

export default ProfileFeature;