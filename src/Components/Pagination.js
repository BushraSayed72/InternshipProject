import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

function Pagination() {
    const pages = 3 

    const numberOfPages = []
    for (let i = 1; i <= pages; i++){
        numberOfPages.push(i)
    }
   const [currentButton, setCurrentButton]= useState(1)
  
   useEffect(() =>{
    let tempNumberofPages = [...numberOfPages]
    tempNumberofPages =  tempNumberofPages.slice(0, 4)
   }, [currentButton])
  return (
    <div className='pagination-container'>
    <Link to='/Blogs1' className='pagination-color'
    onClick={ ()=> setCurrentButton((prev) => prev === 1 ? prev : prev - 1) }
    >Prev  </Link>
    {numberOfPages.map(page =>{
        return (
            <Link
            onClick={() => setCurrentButton(page)}
             to='/Blogs1' className={currentButton === page && 'active'}>{page}</Link>
        )
    })}
    <Link
     to='/Blogs2'
     onClick={ ()=> setCurrentButton((prev) => prev === numberOfPages.length ? prev : prev  + 1 ) }>Next</Link>
      
     
    </div>
  )
}

export default Pagination
