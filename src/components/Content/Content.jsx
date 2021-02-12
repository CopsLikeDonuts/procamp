import React from 'react';
import BackButton from './BackButton/BackButton';
import GeneralInfo from './GeneralInfo/GeneralInfo';
import Features from './Features/Features';
import ContactForm from './ContactForm/ContactForm';

const Content = (props) => {
    return (
        <>
            <BackButton/>
            <GeneralInfo/>
            <Features state={props.state}
                      options={props.options}/>
            <ContactForm/>
        </>
        
    )
}

export default Content;