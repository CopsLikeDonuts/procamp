import React from "react";
import './Slider.css';
import { Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper-bundle.min.js';

const Slider = () => {
  const frames = ['slide1.png', 'slide2.png', 'slide3.png', 'slide4.png', 'slide5.png', 'slide6.png', 'slide7.png'];
  const slides = frames.map(image => {
    let src = './slide-frames/' + image;
    return <div className='slide-frames'><img src={src}></img></div>
  });
  
  return (
    <div className='slider-body'>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">Slide 1</div>
          <div className="swiper-slide">Slide 2</div>
          <div className="swiper-slide">Slide 3</div>
          <div className="swiper-slide">Slide 4</div>
          <div className="swiper-slide">Slide 5</div>
          <div className="swiper-slide">Slide 6</div>
          <div className="swiper-slide">Slide 7</div>
          <div className="swiper-slide">Slide 8</div>
          <div className="swiper-slide">Slide 9</div>
          <div className="swiper-slide">Slide 10</div>
        </div>
        <div className="swiper-pagination"></div>
    </div>
    <div className='test'></div>
  </div>
    
    
  );
  
};

export default Slider;