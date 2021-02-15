import React from 'react';
import './SportFeature.css'
import Slider from '../Slider/Slider';
import Options from './Options/Options';
import Title from '../../Title/Title';
import Text from '../../Text/Text';

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
            <Title titles={props.titles}/>
            <Text texts={props.texts.sportsFeature}/>
            {/* <div className='info-desc'>
                <span>
                Duis hendrerit, arcu ac pharetra vehicula, quam sem rhoncus risus, sit amet faucibus elit odio quis diam. Mauris aliquam porta enim, in hendrerit eros vestibulum at.
                In elementum dolor et magna egestas, ac tincidunt leo ultrices.
                </span>
                
            </div> */}
            <div className='sport-wrapper'>
                <div className='sport-icons'>
                    { sportIcons }
                </div>
                <div className='sport-logo'>
                    <img src='./sports/sport.png' alt='sport'></img>
                </div>
            </div>
            <Text texts={props.texts.sportsSecFeature}/>
            <Slider state={props.state.profileData}/>
            <Options options={props.options}/>
        </div>
    );
}

export default SportFeature;