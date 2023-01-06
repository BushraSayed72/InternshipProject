import React from 'react'
import '../App.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import anika from '../Images/Anika.jpeg'

import 'swiper/css/pagination';
import 'swiper/css';
import rushab from '../Images/shilpa sadhwani.jpeg'
import ganesh from '../Images/Ganesh Shirsat.jpeg'
import suman from '../Images/sumanchandrani.jpeg'
import dhenu from '../Images/mrs.Dhenu Jamgade.jpeg'
import aric from '../Images/Aric Roy.jpeg'
import sonakshi from '../Images/Sonakshi Krishna.jpeg'
import khushagra from '../Images/Kushagra Goel.jpeg'
import kartik from '../Images/Kartik Singh.jpeg'
import priyansh from '../Images/Priyansh Agarwal.jpeg'


function Swiper3() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y,]}
      spaceBetween={25}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >

    <SwiperSlide>
    <div className='swiper-box'>
    <div className='swiper-img-content'>
    <img src={rushab} alt=''/>
    <p>Rushab Sadhwani, Narayana E-techno School,Bangalore</p>
    </div>
      
      <div className='swiper-para'>
        <p className='paragragh'> In the demo class itself, we realized that getting our son trained in CodeKaroYaaro will definetly improve his creative thinking. We are so much impressed with the teaching methodology, Thankyou CodekaroYaaro.</p>
        <p className='heading'>Suman Chandrani</p>
      </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className='swiper-box'>
    <div className='swiper-img-content'>
    <img src={ganesh} alt=''/>
    <p>Dhruv Shirsat, Chandrakant Patkar Vidyalaya, Dhombivali</p>
    </div>
    <div className='swiper-para'>
        <p className='paragragh'> We both Thankyou for the important role you play in shaping our child into the information technology world. Making Our Child to understand the importance an early stage and helping him to shape up his future into world latest tecnology</p>
        <p className='heading'>Ganesh Shirsat</p>
      </div>

      
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className='swiper-box'>
    <div className='swiper-img-content'>
    <img src={suman} alt=''/>
    <p>Arnav Chandrani, The Royal ecole School, Seoni</p>
    </div>
    <div className='swiper-para'>
        <p className='paragragh'> My Son Arnav Chandrani recently joined coding class. I am very happy to see his creativity and progress day by day. His teacher is teaching very well by seeing his concentration level. Thankyou CodeKaroYaaro</p>
        <p className='heading'>Suman Chandrani</p>
      </div>
      
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className='swiper-box'>
    <div className='swiper-img-content'>
    <img src={dhenu} alt=''/>
    <p>Anagha Jamgade</p>
    </div>
    <div className='swiper-para'>
        <p className='paragragh'> She is able to understand each and everything and has no issues and joining code karo yaaro is an amazing experience for me and I learnt a lot from code karo yaaro.</p>
        <p className='heading'>Mrs. Dhenu Jamgade</p>
      </div>
      
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className='swiper-box'>
    <div className='swiper-img-content'>
    <img src={aric} alt=''/>
    
    </div>
    <div className='swiper-para'>
        <p className='paragragh'> Teacher teaches really well and I understand everything and have no issues. Apart from this Code karo Yaaro is such a good platform from where I learnt a lot and developed an interest in my skills. </p>
        <p className='heading'>Aric Roy</p>
      </div>
      
      </div>
    </SwiperSlide>

    <SwiperSlide>
    <div className='swiper-box'>
    <div className='swiper-img-content'>
    <img src={sonakshi} alt=''/>
    
    </div>
    <div className='swiper-para'>
        <p className='paragragh'> Teachers are good and enjoy the classes. I could understand everything and teacher teaches too well. </p>
        <p className='heading'>Sonakshi Krishna</p>
      </div>
      
      </div>
    </SwiperSlide>

    <SwiperSlide>
    <div className='swiper-box'>
    <div className='swiper-img-content'>
    <img src={khushagra} alt=''/>
    
    </div>
    <div className='swiper-para'>
        <p className='paragragh'> Enjoying the classes and Understanding really well. Teacher teaches really well and all my doubts are cleared</p>
        <p className='heading'>Kushagra Goel </p>
      </div>
      
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className='swiper-box'>
    <div className='swiper-img-content'>
    <img src={kartik} alt=''/>
    
    </div>
    <div className='swiper-para'>
        <p className='paragragh'>Classes are going well and the Teacher explain the concept nicely.No doubt the teacher is helpful and co-operative.Happy to join the Classes. </p>
        <p className='heading'>Kartik Singh </p>
      </div>
      
      </div>
    </SwiperSlide>

    <SwiperSlide>
    <div className='swiper-box'>
    <div className='swiper-img-content'>
    <img src={priyansh} alt=''/>
    
    </div>
    <div className='swiper-para'>
        <p className='paragragh'>Classes are really good and interesting and I understand everything very well. Teachers are really good and Explain very well. CodekaroYaaro is a great platform to learn a skill and to reach it upto a certain level. </p>
        <p className='heading'>Priyansh Agarwal </p>
      </div>
      
      </div>
    </SwiperSlide>

    <SwiperSlide>
    <div className='swiper-box'>
    <div className='swiper-img-content'>
    <img src={anika} alt=''/>
    
    </div>
    <div className='swiper-para'>
        <p className='paragragh'>Classes are really good and interesting and I understand everything very well. Teachers are really good and Explain very well. CodekaroYaaro is a great platform to learn a skill and to reach it upto a certain level. </p>
        <p className='heading'>Anika Nilesh Gaddewar </p>
      </div>
      
      </div>
    </SwiperSlide>
    
    
    
  </Swiper>
    
  )
}

export default Swiper3