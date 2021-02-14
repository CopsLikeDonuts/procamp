import React from 'react';
import BackButton from './BackButton/BackButton';
import GeneralInfo from './GeneralInfo/GeneralInfo';
import Features from './Features/Features';
import ContactForm from './ContactForm/ContactForm';
import SimilarProjects from './SimilarProjects/SimilarProjects';

const Content = (props) => {
    return (
        <>
            <BackButton/>
            <GeneralInfo/>
            <Features state={props.state}
                      options={props.options}/>
            <ContactForm/>
            <SimilarProjects/>
        </>
        
    )
}

export default Content;