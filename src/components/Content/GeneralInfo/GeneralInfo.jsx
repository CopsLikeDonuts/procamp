import React from 'react';

const GeneralInfo = () => {
    const infoImages = ['mobile-01-copy-8.png', 'mobile-01-copy-9.png', 'mobile-01-copy-10.png'];
    const images = infoImages.map(imageSrc => {
        const src = './info-content/' + imageSrc;
        return <img src={src}></img>
    })
    return (
        <div className='general-info'>
            <div className='info-name'>
                <span>TEST TASK</span>
            </div>
            <div className='info-desc'>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dui purus, auctor vitae scelerisque ut, aliquet nec ex. Vivamus vestibulum ligula a sagittis semper.</span>
            </div>
            <div className='info-phones'>
                {images}
                {/* <img src='./info-content/mobile-01-copy-8.png'></img> */}
            </div>
        </div>
    )
}

export default GeneralInfo;