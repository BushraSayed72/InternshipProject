import React, { useState } from 'react'
import  CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import coding from '../Images/codingclasses.jpg';
import computer from '../Images/computerClass.jpg';

const CounterUpPage = ()=> {
    const [counterOn, setCounterOn]= useState(false);
  return (
    <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=> setCounterOn(false)}>
           <div className='counterUp'>
           <div className='counterUpFlex'>
            <img src={computer} alt="" />
            <div className='counter'>
            <div>{counterOn && <CountUp start={0} end={10000} duration={3} delay={0}/>}
           +</div>
            
           <p>Students</p>
            </div>
            
           </div>

           <div className='counterUpFlex'>
            <img src={coding} alt="" />
                <div className='counter'>
                 <div> {counterOn && <CountUp start={0} end={480000} duration={3} delay={0}/>}+</div>
            
                <p>Classes Conducted</p>
            </div>
            
           </div>
           
           </div>
             
    </ScrollTrigger>
     
  )
}

export default CounterUpPage
