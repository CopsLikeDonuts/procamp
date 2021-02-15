import React from 'react';
import BackButton from './BackButton/BackButton';
import GeneralInfo from './GeneralInfo/GeneralInfo';
import Features from './Features/Features';
import ContactForm from './ContactForm/ContactForm';
import SimilarProjects from './SimilarProjects/SimilarProjects';

const Content = (props) => {
    console.log(props);
    return (
        <>
            <BackButton/>
            <GeneralInfo titles={props.titles}
                         texts={props.texts}/>
            <Features state={props.state}
                      options={props.options}
                      titles={props.titles}
                      texts={props.texts}/>
            <ContactForm/>
            <SimilarProjects titles={props.titles.simprojTitle}/>
        </>
        
    )
}

export default Content;