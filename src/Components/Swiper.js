import React from 'react'
import '../App.css';
import PLM from '../Images/plm-nordic.png';
import suvidha from '../Images/Suvidha-Foundation.png'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import  { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';


import 'swiper/css';


function swiper() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y,]}
      spaceBetween={25}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
      <div className='sliderbox'>
        <img src={PLM} alt=''/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='sliderbox'>
        <img src={suvidha} alt=''/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='sliderbox'>
        <img src={PLM} alt=''/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='sliderbox'>
        <img src={suvidha} alt=''/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='sliderbox'>
        <img src={PLM} alt=''/>
        </div>
      </SwiperSlide>
      
    </Swiper>
  )
}

export default swiper