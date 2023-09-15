import React from 'react'
import html from '../assets/experience/html.png';
import css from '../assets/experience/css.png';
import javascript from '../assets/experience/javascript.png';
import tailwind from '../assets/experience/tailwind.png';
import react from '../assets/experience/react.png';
import github from '../assets/experience/github.png';
const Experiences = () => {
const experience=[
    {
        id:1,
        src:html,
        title:"html",
        style:"shadow-red-400 text-red-400"
    }, {
        id:2,
        src:css,
        title:"CSS",
        style:"shadow-blue-500 text-blue-500"
    },
    {
        id:3,
        src:javascript,
        title:"JavaScript",
        style:"shadow-yellow-500 text-yellow-500"
    },
    {
        id:4,
        src:react,
        title:"React",
        style:"shadow-cyan-500 text-cyan-500"
    },
    {
        id:5,
        src:github,
        title:"github",
        style:"shadow-white text-white"
    },
    {
        id:6,
        src:tailwind,
        title:"Tailwind",
        style:"shadow-cyan-300 text-cyan-300"
    },
]
  return (
    <div className='w-full bg-black text-gray-500 text-4xl flex flex-col'>
        <div className="w-full pt-24 flex md:ml-[40%] ml-[20%] flex-col justify-center  text-cyan-500"><h1 className='md:ml-[35px]  ml-12 mb-[20px]'>Portfolio</h1>
       <p className='text-sm text-white mr-12'>👍there are the technologies i wroked with</p></div>
        <div className="md:w-11/12 md:ml-5 w-full flex flex-row flex-wrap justify-center  md:pt-16 md:pl-36  md:flex-wrap">
          
          
         {experience.map(({id,src,title,style})=>(
            <div className={" flex p-8  rounded-md key={id} md:w-[25%] w-[35%] m-3 md:hover:scale-105 duration-300  items:center  flex-col shadow-md shadow-gray-600" +" "+style}>

<img  className='w-[80%] md:ml-4' src={src} alt="NOT Found" />
           <div  className='text-sm ml-4 flex justify-around '>
            <button  className={'shadow-sm rounded-sm p-3 m-3 text-cyan-500'+ ' '+style }>{title}</button>
          
               </div></div>
         ))}
           
               
           
        
                    </div>
    </div>
  )
}

export default Experiences;