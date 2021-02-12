import React from "react";
import './Slider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Pagination, Scrollbar} from 'swiper'; 

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Pagination, Scrollbar]);

const Slider = (props) => {
  const slides = props.state;
  let frames = slides.map(slide => {
    let src = './slide-frames/' + slide + '.png'
    return <SwiperSlide><img src={src} className='frame' alt={src}></img></SwiperSlide>
  });
  return (
    
    <div className='slide-wrapper'>
        <Swiper
          spaceBetween={100}
          slidesPerView={4}
          scrollbar={{ draggable: true, dragSize: 100}}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          centeredSlides={true}
        >
          { frames }
          <img  src='./slide-frames/mobile-frame.png' alt='mobile-frame' className='mobile-frame'>
          </img>
        </Swiper>
    </div>
    
    
  );
};

export default Slider;