import React from 'react'
import Pagination from './Pagination'
import ten from '../CardImages/10image.png' 
import eleven from '../CardImages/11image.png'
import twelve from '../CardImages/12image.png'
import thirteen from '../CardImages/13image.png'
import fourteen from '../CardImages/14image.png'
import fifteen from '../CardImages/15image.png'

function Blogs1() {
  return (
    <div className='blogs'>
    <h1> Blogs </h1>
    <div className='card-row'>
    <div className='card'> 
    <img src={ten} alt=''/>
    <p className='card-headings'><a href='#' className='card-heading'>Why Coding Is Important For Kids In 2021 | Online Coding For Kids </a></p>
    <p className='card-para'> Coding is a Skill Set that can be pursued by anyone who wants to amaze the world with his solutions to make everyday ... </p>
    <button> Read More</button>
    </div>
    
    <div className='card'> 
    <img src={eleven} alt=''/>
    <p className='card-headings'><a href='#' className='card-heading'>The Top 10 Skills Children Should Learn In 2021 </a></p>
    <p className='card-para'> We want our children to be ready for the future, every parent wants to prepare their children in every way, education .... </p>
    <button> Read More</button>
    </div>

    <div className='card'> 
    <img src={twelve} alt=''/>
    <p className='card-headings'><a href='#' className='card-heading'>Top 10 Online Coding School </a></p>
    <p className='card-para'> Technology gives birth to the Internet, the Internet changes the world drastically, we cannot imagine a world without .... </p>
    <button> Read More</button>
    </div>
</div>
 <div className='card-row'>
    <div className='card'> 
    <img src={thirteen} alt=''/>
    <p className='card-headings'><a href='#' className='card-heading'>Comparison Between Whitehatjr And CodekaroYaaro </a></p>
    <p className='headings'>Whitehat Jr</p>
    <p className='card-para'> Whitehat Jris a Mumbai-based Edutech startup founded....... </p>
    <button> Read More</button>
    </div>

    <div className='card'> 
    <img src={fourteen} alt=''/>
    <p className='card-headings'><a href='#' className='card-heading'>The Importance Of Computer Science Education For School Students </a></p>
    <p className='card-para'>The Industrial Revolution changes the world, employs the needy, and started the race among countries to improve their... </p>
    <button> Read More</button>
    </div>

    <div className='card'> 
    <img src={fifteen} alt=''/>
    <p className='card-headings'><a href='#' className='card-heading'>Top 5 Programming Languages In 2021</a></p>
    <p className='card-para'>Language is an essential feature of software development. Learning any language is not an easy task, and it takes lot .... </p>
    <button> Read More</button>
    </div>

    </div>

    <div className='card-row'>
    <div className='card'> 
    <img src='' alt=''/>
    <p className='card-headings'><a href='#' className='card-heading'>Things Which Are Responsible For Leading Edutech-Industry.</a></p>
    <p className='card-para'>I have been writing this blog to give people an idea of the positive and negative of the Edutech industry. According ...</p>
    <button> Read More</button>
    </div>

    <div className='card'> 
    <img src='' alt=''/>
    <p className='card-headings'><a href='#' className='card-heading'>Online Learning Is Like A Blessing During The COVID-19 Crisis.</a></p>
    <p className='card-para'>In this blog we had research on how online learning proves helpful in gaining knowledge during this COVID-19 pandemic... ...</p>
    <button> Read More</button>
    </div>

    <div className='card'> 
    <img src=''alt=''/>
    <p className='card-headings'><a href='#' className='card-heading'>People Are Running After Hype.</a></p>
    <p className='card-para'>In this blog we are explaining a medium, used to gather attention in the pre-launch of products by marketing strategi... ...</p>
    <button> Read More</button>
    </div>
    


    </div>


    
    <div>
     <Pagination/>
    </div>
      
    </div>
  )
}

export default Blogs1
