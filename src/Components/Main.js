import React from 'react'
import codekro from '../Images/code-karo-yaaro.jpg'
import introducing from '../Images/introducing.png'
import hour from '../Images/HourOFCode.jpg'
import kid from '../Images/kidsCoding.jpeg'
import learnAny from '../Images/learnanywhere.jpg'
import animated from '../Images/animated.gif'
import doubt from '../Images/doubtSolving.png'
import mentor from '../Images/mentor.png'
import brain from '../Images/brainstorming.jpg'
import skill from '../Images/skill.jpg'
import enterpreneur from '../Images/enterpreneurship.webp'
import mobile from '../Images/mobile.png'
import quality from '../Images/qualitycoding.jpg'
import competative from '../Images/competative.png'
import problemSolving from '../Images/problemSolving.png'
import creative from '../Images/creative.jfif'
import persistence from '../Images/persistence.jfif'
import starthere from '../Images/start-here-gif.gif'
import web from '../Images/kidsCoding.jpeg'
import python from '../Images/python.jpeg'
import artificial from '../Images/artificialintelligence.jpg'
import game from '../Images/gameapp.png'
import Swiper from './Swiper.js'
import Swiper2 from './Swiper2.js'
import CounterUp from './CounterUpPage.js'
import Swiper3 from './Swiper3'
 


function Main() {
  return (
    <div className='main'>

   
    <div className='main-first'>
    <div className='left_first'>
    <p className='text'>CODERS TODAY,  TECH-LEADERS  TOMORROW   </p>
    <p className='heading'>India's First Online School Of Computer Science</p>
    <br/>
    <p className='enter'>Enter the World Of Coding by enrolling in our coding school today!</p>

 <p className='quotation'>  "In Every Kid, there is a power to change the world"</p>
   
   



</div>
<div className='right_first'>
<img src={codekro} alt='codekro'/>

</div>
</div>


<div className='main-second'>
 <div className='left_second'>
 <img src={introducing} alt='intro' />
 <h1>Artificial Intelligence And Machine Learning</h1>
 <p>Take The Next Step Toward Your Personal & Professional Goals With Us</p>
 <p>Make your career with a world class learning experience</p>

 </div>
 <div className='right_second'>
    <img src={hour} alt='hour'/>
 </div>

</div>

<div className='main-third'>
<div className='center'>
<p className='third-heading'>Our Advance Learning System</p>
  <div className='underline'></div>
  </div>
  
 
   
  <div className='rightSide'>
  <div className='row'>
<div className="img-overlay p-btn--1 p-btn--3 ">
      <img  className='frstimg' src={learnAny} alt="my works"/>
      <div className="overlay">
        <a href="#" target="coding" className="common-heading">Learn AnyWhere</a>
      </div>
    </div>

    <div className="img-overlay p-btn--2 image-not-active">
      <img className='scndimg' src={animated} alt="my works" height=""/>
      <div className="overlay">
        <a href="#" target="coding" className="common-heading">Quick Resolution</a>
      </div>
    </div>

    <div className="img-overlay p-btn--1 ">
      <img className='thirdimg' src={doubt} alt="my works"/>
      <div className="overlay">
        <a href="#" target="coding" className="common-heading">Instant Doubt Solving</a>
      </div>
    </div>
</div>

<div className='row'>
    <div className="img-overlay image-not-active">
      <img className='fourthimg' src={mentor} alt="my works" height=""/>
      <div className="overlay">
        <a href="#" target="coding" className="common-heading">Mentor Support</a>
      </div>
    </div>

    <div className="img-overlay ">
      <img className='fifthimg' src={skill} alt="my works"/>
      <div className="overlay">
        <a href="#" target="coding" className="common-heading">BrainStorming</a>
      </div>
    </div>

    <div className="img-overlay p-btn--1  image-not-active ">
      
      <img className='sixthimg' src={brain} alt="my works" height=""/>
      <div className="overlay">
        <a href="#" target="coding" className="common-heading">Skill Based Education</a>
      </div>
    </div>
</div>

<div className='row'>
    <div className="img-overlay ">
      <img className='seventhimg' src={enterpreneur} alt="my works"/>
      <div className="overlay">
        <a href="#" target="coding" className="common-heading">Enterpreneurship</a>
      </div>
    </div>

    <div className="img-overlay ">
      <img className='eightimg' src={mobile} alt="my works"/>
      <div className="overlay">
        <a href="#" target="coding" className="common-heading">Learn On Mobile</a>
      </div>
    </div>

    <div className="img-overlay ">
      <img className='ninthimg' src={quality} alt="my works"/>
      <div className="overlay">
        <a  href="#" target="coding" className="common-heading">Quality Education</a>
      </div>
    </div>
    </div>

    </div>
</div>


<div className='main-four'>
<div className='center'>
<p className='third-heading'>Why Coding Is Important ?</p>
  <div className='underline'></div>
  </div>

  <div className='border'>
    <div className='flex'>
      <div className='same'>
        <img src={competative} alt=''/>
        <p>Coding gives your child a competitive edge</p>
      </div>
      <div className='same'>
        <img src={problemSolving} alt=''/>
        <p>Coding improves problem-solving skills</p>

      </div>
      <div className='same'>
        <img src={persistence} alt=''/>
        <p>Coding teaches persistence</p>
      </div>
      <div className='same'>
      <img src={creative} alt=''/>
      <p>Coding improves creativity</p>
      </div>
    </div>
  </div>

</div>

<div className='mainFive'>
<div className='center'>
<p className='third-heading'>Admission Open For All Grades</p>
<p className='third-heading'>1:10 Live Interactive Classes</p>
  <div className='underline'></div>
  </div>

  <div className='Grades'>
    <div className='gradeContainer'>Grade 1-4</div>
    <div className='gradeContainer'>Grade 5-7 </div>
    <div className='gradeContainer'>Grade 8-10</div>
    <div className='gradeContainer'>Grade 10+</div>
  </div>

  <div className='main_fiveContainer'>
    <div className='section'>
    <img src={starthere} alt=''/>
    <p className='container-main'>Starter</p>
    <p className='rupees'> ₹ 5,788</p>
    <p className='course'>* Course fees is not refundable once paid</p>
    <p className='learn'>For 2 Months (3 Super Sessions Per Week) </p>
         <p className='learn'>Learning</p>
<p  className='light-text' >Basics Of Coding, Understanding Of Algo’s, Utility Apps, Block-Based Coding</p>
<hr/>
<p className='learn'>Activities</p>
<p  className='light-text'>16+ Game/App Building Projects, Interactive Quizzes</p>
<hr/>
<p className='learn'>Benefits</p>
<p  className='light-text'>Understanding Of Code Blocks, Structural Programming, Class Projects</p>
<button className='join'>Join Course</button>
    </div>


    <div className='section'>
    <img src={starthere} alt=''/>
    <p className='container-main'>Intermediate</p>
    <p className='rupees'> ₹ 10,290</p>
    <p className='course'>* Course fees is not refundable once paid</p>
    <p className='learn'>For 4 Months (3 Super Sessions Per Week)</p>
        <p className='learn'>Learning</p>
<p className='light-text'>Sequencing And Complex Loop, Logic Structures, Utility Apps, Game Development, Static Webpage</p>
<hr/>
<p className='learn'>Activities</p>
<p className='light-text'>32+ Game/App Building Projects, Interactive Quizzes</p>
<hr/>
<p className='learn'>Benefits</p>
<p className='light-text'> Boost Implementation, Creative Thinking, Become Problem Solver</p>
<button className='join'>Join Course</button>
    </div>


    
    <div className='section'>
    <img src={starthere} alt=''/>
    <p className='container-main'>Professional</p>
    <p className='rupees'> ₹ 15,434</p>
    <p className='course'>* Course fees is not refundable once paid</p>
    <p className='learn'>For 6 Months (3 Super Sessions Per Week)</p>
        <p className='learn'>Learning</p>
<p className='light-text'>Dynamic Website, App Development, Text Based Coding</p>
<hr/>
<p className='learn'>Activities</p>
<p className='light-text'>48+ Advance Level App/Website Development, Interactive Quizzes and Language Based Project</p>
<hr/>
<p className='learn'>Benefits</p>
<p className='light-text'>Boost in Logical Thinking Skill, Enhancement in Algorithmic Thinking and Live Project</p>
<hr/>
<p className='learn'>Mentorship</p>
<p className='light-text'>Cyber Olympiad Preparation</p>
<button className='join'>Join Course</button>

    </div>
   
    
  </div>

</div>

<div className='mainSix'>
<div className='center'>
<p className='third-heading'>1:1  Live Interactive Classes</p>
  <div className='underline'></div>
  </div>

  <div className='main_fiveContainer'>
    <div className='section'>
    <p className='container-main'>starter</p>
    <p className='rupees'> ₹  4,250 /-</p>
    <p className='light-text' >* Course fees is not refundable once paid
Super 8 Sessions

Introduction to Programming Languages

Basic concepts of Scratch Programming/Block based coding/Web Designing

</p>
<button className='join'>Join Course</button></div>


    <div className='section'>
    <p className='container-main'>Intermediate</p>
    <p className='rupees'> ₹  25,133/- </p>
    <p className='light-text' >* Course fees is not refundable once paid
Super 8 Sessions

Introduction to Programming Languages

Basic concepts of Scratch Programming/Block based coding/Web Designing

</p>
<button className='join'>Join Course</button>
    </div>
    <div className='section'>
    <p className='container-main'>Professional</p>
    <p className='rupees'> ₹  40,766/- </p>
    <p className='light-text' >* Course fees is not refundable once paid
Super 8 Sessions

Introduction to Programming Languages

Basic concepts of Scratch Programming/Block based coding/Web Designing

</p>
<button className='join'>Join Course</button>
    </div>
  </div>

</div>
  
  <div className='mainSeven'>
  <div className='center'>
<p className='third-heading'>Courses Designed Specially For Kids</p>
  <div className='underline'></div>

<div className='main-seven-content'>
  <div className='content-seven'>
    <img src={web} alt=''/>
    <p>Web Development</p>
  </div>

  <div className='content-seven'>
    <img src={mobile} alt=''/>
    <p>Mobile App
         Development</p>
  </div>

  <div className='content-seven'>
    <img src={artificial} alt=''/>
    <p>Artificial
      Intelligence</p>
  </div>

  <div className='content-seven'>
    <img src={python} alt=''/>
    <p>Python Programming</p>
  </div>

 

  <div className='content-seven'>
    <img src={game} alt=''/>
    <p>Game App Development</p>
  </div>
  

  </div>
  </div>
  </div>

  <div className='main-eight'>
  <div className='center'>
<p className='third-heading'>Corporate Partners</p>
  <div className='underline'></div>
  </div>
<Swiper/>
  
  
  </div>

  <div className='main-nine'>
  <div className='center'>
<p className='third-heading'>Featured in AIR, Navbharat
 </p>
  <div className='underline'></div>
  </div>
  <Swiper2/>
  <CounterUp/>
  
  

  </div>

  <div className='main-ten'>
  <div className='center'>
<p className='third-heading'>Testimonials
 </p>
  <div className='underline'></div>
  </div>

  <Swiper3/>
  

  </div>
  
 


</div>
  )
}

export default Main
