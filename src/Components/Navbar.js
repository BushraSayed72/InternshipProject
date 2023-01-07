import React from 'react'
import logo from '../Images/logo.jfif'
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
    <div className='left_nav'><img className='logo' src={logo} alt='logo' />
    <p>CodeKaroYaaro</p>
    </div>
    
    <div className='right_nav'>
        <ul className='right_list'>
            <li>
            <Link className='nav-links' to='/'> Home </Link></li>
            <li>
            <a href='https://www.codekaroyaaro.com/little-coders-gallery' className='nav-links'>About Us</a></li>
            <li>
            <a href='https://www.codekaroyaaro.com/little-coders-gallery' className='nav-links'>li'l Coders</a></li>
            <li> 
            <Link className='nav-links' to='/Blogs1'> Blogs</Link></li>
        </ul>
        <button className='btn'> <a href='#' className='btn-link' > Book free Trail</a></button>
        <button className='btn'> <a href='#' className='btn-link'>Join Course</a></button>
    </div>
      
    </div>
  )
}

export default Navbar
