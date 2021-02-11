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

const Slider = () => {
  return (
    <div>
    <Swiper
      spaceBetween={200}
      slidesPerView={5}
      // scrollbar={{ draggable: false, dragSize: 'auto' }}
      pagination={{ clickable: true, type: 'custom'}}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      centeredSlides={true}
    >
      <SwiperSlide><img src='./slide-frames/slide1.png' className='frame'></img></SwiperSlide>
      <SwiperSlide><img src='./slide-frames/slide2.png' className='frame'></img></SwiperSlide>
      <SwiperSlide><img src='./slide-frames/slide3.png' className='frame'></img></SwiperSlide>
      <SwiperSlide><img src='./slide-frames/slide4.png' className='frame'></img></SwiperSlide>
      <SwiperSlide><img src='./slide-frames/slide5.png' className='frame'></img></SwiperSlide>
      <SwiperSlide><img src='./slide-frames/slide6.png' className='frame'></img></SwiperSlide>
      <SwiperSlide><img src='./slide-frames/slide7.png' className='frame'></img></SwiperSlide>

    </Swiper>
    
    <div className='test'></div>
    </div>
  );
};

export default Slider;