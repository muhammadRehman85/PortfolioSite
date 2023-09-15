import React from 'react'
import  { useState } from 'react';

import { FaBars ,FaTimes} from 'react-icons/fa';
function Navbar() {
const [nav,setNav]=useState(false);
    const links=[{
        id:1,
        link:"Home",
    },{
        id:2,
        link:"About",
    }
    ,{
        id:3,
        link:"Portfolio",
    }
    ,{
        id:4,
        link:"Experiences",
    },
    {
        id:5,
        link:"Contact",
    }

]
  return (<>
  
  <div className=' text-white  w-full h-20 bg-black flex justify-around  fixed '>
    
    <div className="logo   text-4xl  p-5 font-signature flex justify-items-center    "><h1>M.Rehman</h1></div>
    <div className="navlinks-wrapper w-8/12 p-5 float-right">
        <ul className=' hidden md:flex justify-end'>
    
          {links.map(({id,link})=>(
             <li className='px-5 hover:text-white hover:text-xl duration-300 text-gray-500 cursor-pointer 
             hover:scale-100 duration:200' key={id}>{link}</li>
          )
          )}
         
        </ul>
        <div  onClick={()=>setNav(!nav)} className="pr-4  cursor-pointer z-20 text-gray-500 float-right  md:hidden">
           {(nav?<FaTimes  size={30}/>: <FaBars size={30}/>)}
        </div>

        {
            (nav&&(
                <ul className='flex text-xl transition-3s  md:hidden items-center flex-col w-full h-screen justify-center absolute top-12 left-0  bg-black '>
                       {links.map(({id,link})=>(
                 <li className='px-4 py-6  text-gray-500 cursor-pointer text-4xl' key={id}>{link}</li>
              )
              )}</ul>
            ))
        }
       
    </div>
    </div></>
   
  )
}

export default Navbar;