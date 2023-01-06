import React, {useState, useEffect} from 'react'

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
    <a to='!#' className=''
    onClick={ ()=> setCurrentButton((prev) => prev === 1 ? prev : prev - 1) }
    >Prev </a>
    {numberOfPages.map(page =>{
        return (
            <a
            onClick={() => setCurrentButton(page)}
             href='!#' className={currentButton === page && 'active'}>{page}</a>
        )
    })}
    <a
     href='!#'
     onClick={ ()=> setCurrentButton((prev) => prev === numberOfPages.length ? prev : prev  + 1) }>Next</a>
     
    </div>
  )
}

export default Pagination
