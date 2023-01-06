import React from 'react'
import '../App.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Air from '../Images/air.jpeg';
import Navbharat from '../Images/Navbharat.jpeg';
import 'swiper/css/pagination';
import 'swiper/css';


function Swiper2() {
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
      <img src={Navbharat} alt=''/>
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className='sliderbox'>
      <img src={Air} alt=''/>
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className='sliderbox'>
      <img src={Navbharat} alt=''/>
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className='sliderbox'>
      <img src={Air} alt=''/>
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className='sliderbox'>
      <img src={Navbharat} alt=''/>
      </div>
    </SwiperSlide>
    
  </Swiper>
    
  )
}

export default Swiper2