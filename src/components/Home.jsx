import React from 'react'
import {MdKeyboardArrowRight}from 'react-icons/md';
import heroimage from '../assets/heroImage.png'
const Home = () => {
  return (
    <div className="w-12/12 h-screen  text-white flex flex-col justify-center items-center bg-black">

      <div className="w-full  md:flex md:flex-row flex flex-col md:mt-20 justify-center h-screen
    ">

        <div className="md:w-2/4  w-12/12 h-5/6 text-white flex justify-center
        items:center md:flex-col flex-row ">

          <div className="md:p-20 p-10 md:mt-24 md:ml-20 mt-20">
            <h1 className='md:text-4xl text-lg font-bold'>I am Full Stack Developer</h1>
            <p className='mt-5'>😊 I am expert web developer working with Netloop limited.I have years of experience
              i  ❤ love to work with technologies React , css,tailwind, laravel✌</p>
              <button className='w-32 bg-cyan-500 rounded-md flex font-bold p-1 px-3 mt-3
                   bg-gradiant-r from-cyan-500 to-blue-900  group  text-lg '> Portfolio
              <span className='group-hover:rotate-90 duration-300'>  <MdKeyboardArrowRight className='float-right' size={30}/></span>
              </button>
          </div> 
          </div>
        <div className="md:w-2/4 md:h-5/6 md:p-10 p-10"><img  className="md:w-3/5 md:mt-10  rounded-md "src={heroimage} alt="no found" /></div>
      </div>
    </div>
  )
}
export default Home;