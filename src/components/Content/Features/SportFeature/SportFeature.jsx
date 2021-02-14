import React from 'react';
import './SportFeature.css'
import Slider from '../Slider/Slider';
import Options from './Options/Options';

const SportFeature = (props) => {
    
    const icons = ['tennis', 'american-football', 'basketball', 'field-hockey', 'baseball', 'hockey', 'football', 'tennis2', 'golf']
    const sportIcons = icons.map((icon, index) => {
        const src = './sports/' + icon + '.svg'
        if (icons.indexOf(icon) % 2 !== 0){
            return <img src={src} alt={icon} className='bottom' key={index}></img>
        } else {
            return <img src={src} alt={icon} key={index}></img>
        }
        
    });

    return (
        <div className='reg-feature'>
            <div className='info-name'>
                <span>FEATURE 2</span>
            </div>
            <div className='info-desc'>
                <span>
                Duis hendrerit, arcu ac pharetra vehicula, quam sem rhoncus risus, sit amet faucibus elit odio quis diam. Mauris aliquam porta enim, in hendrerit eros vestibulum at.
                In elementum dolor et magna egestas, ac tincidunt leo ultrices.
                </span>
                
            </div>
            <div className='sport-wrapper'>
                <div className='sport-icons'>
                    { sportIcons }
                </div>
                <div className='sport-logo'>
                    <img src='./sports/sport.png' alt='sport'></img>
                </div>
            </div>
                <div className='info-desc'>
                    <span>
                    Nunc venenatis augue interdum nulla aliquet finibus. Integer blandit ligula leo, in scelerisque felis elementum fringilla. Vestibulum sagittis orci dui, sed congue magna lacinia a. Aliquam aliquam dapibus sem quis tempor. Vivamus commodo ipsum vitae tempor hendrerit. 
                    </span>
                </div>
            <Slider state={props.state.profileData}/>
            <Options options={props.options}/>
        </div>
    );
}

export default SportFeature;