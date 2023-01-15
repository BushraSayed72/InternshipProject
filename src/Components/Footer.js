import React from 'react'
import '../App.css';
import {FaFacebook}  from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';
import {FaWhatsapp} from 'react-icons/fa'

function Footer() {
  return (
    <>
    <div className='footer'>
    <div className='footersection'>
        <h2>Code Karo Yaaro</h2>
        <p>We at CodeKaroYaaro empowering every kid to become a Computer Science Expert
         by teaching them to develop mobile apps, gaming apps, websites, web applications and AI-Powered Mobile Apps.</p>
        <p>Your child is Just a Call away to become a Tech Leader of Tomorrow.</p>
    </div>
    <div className='footersection'>
    <p>Why is coding important for my child?</p>
    <hr/>
    <p>What programming language is suitable for my child to learn?</p>
    <hr/>
    <p>Where do I enroll in courses?</p>
    <hr/>
    <p>Who should I contact to change my batch timing or teacher?</p>
    <hr/>
    <p>What program do you use to teach coding?</p>
    
    </div>
    <div className='footersection'>
        <h2>Contact us</h2>
        <p>Email : info@codekaroyaaro.com</p>
        <p>parents.support@codekaroyaaro.com</p>
        <p>Address : H NO. 1951, Near Water Tank Annamod, Khaparkheda, Nagpur, Maharashtra, 441102</p>
        <p className='footer-icons'> <a href='#' className='same'><FaFacebook/> </a> 

        <a href='#' className='same'><FaTwitter/></a>

        <a href='#' className='same'><FaLinkedin/> </a> 

        <a href='#' className='youtube'> <FaYoutube/></a>  

        <a href='#' className='whatsapp'><FaWhatsapp/> </a>  </p>
    </div>
    <div className='footersection'>
        <h2>More</h2>
        <p> <a href='#'>Terms & Condition </a> </p>
        <p> <a href='#'>Privacy Policy</a></p>
        <p> <a href='#'>Blogs </a></p>
        <p> <a href='#'>Career</a></p>
        <p> <a href='#'>Verify Certificate </a></p>
        <p>Parent Complaints</p>
    </div>
    


      
    </div>
    <hr className='footerHr'/>
    <p className='cpyright'>Copyright ©2023 All rights reserved | The site is made with love by Bushra Sayed</p>
    </>
  )
}

export default Footer
