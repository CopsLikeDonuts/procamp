import React from 'react';
import './SummaryFeature.css';
import Title from '../../Title/Title';
import Text from '../../Text/Text';

const SummaryFeature = (props) => {
    return (
        <>
            <div className='reg-feature'>
                <Title titles={props.titles}/>
                <Text texts={props.texts.summaryPar}/>
            </div>
            <Text texts={props.texts.summarySecPar}/>
        </>
    )
}

export default SummaryFeature;