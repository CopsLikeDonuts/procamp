import React from 'react';
import './GeneralInfo.css';
import Text from '../Text/Text';
import Title from '../Title/Title';

const GeneralInfo = (props) => {
    console.log(props);
    const infoImages = ['mobile-01-copy-1.png', 'mobile-01-copy-2.png', 'mobile-01-copy-3.png'];
    const images = infoImages.map((imageSrc, index) => {
        const src = './info-content/' + imageSrc;
        return <img src={src} alt={src} key={index}></img>
    });
    return (
        <div className='general-info'>
            <div className='info-header'>
                <span>test task</span>
            </div>
            <Text texts={props.texts.intro}/>
            <div className='info-phones'>
                {images}
            </div>
            <Title titles={props.titles.introTitle}/>
            <div className='info-header'>
                <img src='./info-content/procamps-logo.png' className='procamps-logo' alt='procapms-logo'></img>
            </div>
            <Text texts={props.texts.info} />
        </div>
    )
}

export default GeneralInfo;