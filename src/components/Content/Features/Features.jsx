import React from 'react';
import RegFeature from './RegFeature/RegFeature';
import SportFeature from './SportFeature/SportFeature';
import ProfileFeature from './ProfileFeature/ProfileFeature';
import LogoFeature from './LogoFeature/LogoFeature';
import SummaryFeature from './SummaryFeature/SummaryFeature';


const Features = (props) => {
    
    return (
        <>
            <RegFeature state={props.state}
                        titles={props.titles.infoTitle}
                        texts={props.texts.regFeature}/>
            <SportFeature state={props.state}
                          options={props.options}
                          titles={props.titles.sportsTitle}
                          texts={props.texts}/>
            <ProfileFeature state={props.state}
                            titles={props.titles.profileTitle}
                            texts={props.texts.profileFeature}/>
            <LogoFeature state={props.state}
                         titles={props.titles.logosTitle}/>
            <SummaryFeature titles={props.titles.summaryTitle}
                            texts={props.texts}/>
        </>
    )
}

export default Features;