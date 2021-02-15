import React from "react";
import './SimilarProjects.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper';
import Title from '../Title/Title'; 

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Autoplay]);

const SimilarProjects = (props) => {
  const slides = ['carousel1', 'carousel2', 'carousel3'];
  let frames = slides.map((slide, index) => {
    let src = './carousel/' + slide + '.jpg'
    return <SwiperSlide key={index}><img src={src} className='slide' alt={src}></img></SwiperSlide>
  });
  return (
    <div className='simproj-wrapper'>
        <div className='slide-wrapper'>
            <Title titles={props.titles}/>
            <Swiper
            spaceBetween={500}
            slidesPerView={3}
            centeredSlides={true}
            loop={true}
            autoplay={{delay: 3500, disableOnInteraction: false}}
            >
            { frames }
            
            </Swiper>
        </div>
    </div>
    
    
  );
};

export default SimilarProjects;