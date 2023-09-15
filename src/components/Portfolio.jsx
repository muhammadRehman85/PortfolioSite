import React from 'react'
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg';
import installNode from '../assets/portfolio/installNode.jpg';
import navbar from '../assets/portfolio/navbar.jpg';
import reactSmooth from '../assets/portfolio/reactSmooth.jpg';
import reactWeather from '../assets/portfolio/reactWeather.jpg';
import calc from '../assets/portfolio/calculator.png';
import dictionary from '../assets/portfolio/dictionary.PNG';
// import kokkariResturant from '../assets/portfolio/kokkariResturant.png'

// import reactparallax from '../assets/portfolio/reactParallax.png';


const Portfolio = () => {
   const portfolio=[
      {
         id:1,
         src:arrayDestruct
      },
         {
         id:2,
         src:reactSmooth
      },
      {
         id:3,
         src:installNode
      },
       {
         id:4,
         src:dictionary
      },
       {
         id:5,
         src:calc
      },
       {
         id:5,
         src:reactWeather
      },
        {
         id:6,
         src:reactWeather
      },  {
         id:7,
         src:navbar
      },  {
         id:8,
         src:navbar
      },
      {
         id:8,
         src:calc
      },

   ]
  return (
    <div className='w-full bg-black text-gray-500 text-4xl flex flex-col'>
        <div className="w-full pt-24 flex  ml-[40%] flex-col justify-center  text-cyan-500"><h1 className='ml-[35px] mb-[20px]'>Portfolio</h1>
       <p className='text-sm text-white'>👍check out some of my work right now</p></div>
        <div className="md:w-11/12 md:ml-5 w-full flex md:flex-row flex-col justify-center  md:pt-16 md:pl-36  md:flex-wrap">
          
          
         {portfolio.map(({id,src})=>(
            <div className="rounded-md key={id} md:w-[30%] w-[90%] m-3 md:hover:scale-105 duration-300 justify-between flex flex-col shadow-md shadow-gray-600">

<img className='rounded-md '   src={src} alt="NOT Found" />
           <div  className='text-sm  flex justify-around '>
            <button  className='shadow-sm rounded-sm shadow-cyan-500 p-1 m-2 text-cyan-500'>demo</button>
            <button  className='shadow-sm rounded-sm shadow-cyan-500 p-1 m-2 text-cyan-500' >Code</button>
               </div></div>
         ))}
           
               
           
        
                    </div>
    </div>
  )
}

export default Portfolio;