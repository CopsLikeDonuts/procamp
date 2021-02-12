import React from 'react';
import RegFeature from './RegFeature/RegFeature';
import SportFeature from './SportFeature/SportFeature';
import ProfileFeature from './ProfileFeature/ProfileFeature';
import LogoFeature from './LogoFeature/LogoFeature';
import SummaryFeature from './SummaryFeature/SummaryFeature';


const Features = (props) => {
    
    return (
        <>
            <RegFeature state={props.state}/>
            <SportFeature state={props.state}
                          options={props.options}/>
            <ProfileFeature state={props.state}/>
            <LogoFeature state={props.state}/>
            <SummaryFeature/>
        </>
    )
}

export default Features;