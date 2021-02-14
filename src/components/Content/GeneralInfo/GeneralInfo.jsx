import React from 'react';
import './GeneralInfo.css'

const GeneralInfo = () => {
    const infoImages = ['mobile-01-copy-1.png', 'mobile-01-copy-2.png', 'mobile-01-copy-3.png'];
    const images = infoImages.map((imageSrc, index) => {
        const src = './info-content/' + imageSrc;
        return <img src={src} alt={src} key={index}></img>
    });
    return (
        <div className='general-info'>
            <div className='info-name'>
                <span>test task</span>
            </div>
            <div className='info-desc'>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dui purus, auctor vitae scelerisque ut, aliquet nec ex. Vivamus vestibulum ligula a sagittis semper.</span>
            </div>
            <div className='info-phones'>
                {images}
            </div>
            <div className='info-name'>
                <span>bacon ipsum dolor amet shankle</span>
            </div>
            <div className='info-name'>
                <img src='./info-content/procamps-logo.png'             className='procamps-logo'></img>
            </div>
            <div className='info-desc'>
                <span>Suspendisse vitae arcu mattis, consequat nibh nec, dapibus augue. In luctus fermentum arcu, sed luctus eros elementum vel. Aenean in magna ac eros lacinia fringilla. Vestibulum et convallis eros, quis varius nisi. Suspendisse potenti. Sed magna urna, fermentum in aliquam non, fermentum sit amet neque.
                </span>
            </div>
        </div>
    )
}

export default GeneralInfo;