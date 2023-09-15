import {FaInstagramSquare,FaFacebookSquare } from 'react-icons/fa';
import { BsJournalBookmark} from 'react-icons/bs';
import {AiFillGithub} from 'react-icons/ai';
const Sociallinks = () => {

    const links=[
        {
            id:1,
            child:(<>instagram
            <FaInstagramSquare size={30}/></>)
            ,href:"https://www.instagram.com",
            style:"bg-pink-700 rounded-tr-md",
        },
        {
            id:2,
            child:(<>Facebook
            <FaFacebookSquare size={30}/></>)
            ,href:"https://www.facebook.com",
            style:"bg-blue-600 ",

           
        },   {
            id:3,
            child:(<>
            Github
            <AiFillGithub size={30}/>
            </>)
            ,href:"https://www.github.com",
            style:"bg-indigo-900",

            
        }, {
            id:4,
            child:(<>Resume
            <BsJournalBookmark size={30}/> </>)
            ,href:"https://www.instagram.com",
            download:true,
            style:"rounded-br-md",
        }
    ]
  return (
   <>
   <div className="hidden lg:flex flex-col fixed z-10 top-[35%] left-0">
{links.map(({id,child, style,href,download})=>(
   <ul>
   <li key={id} className={'flex w-40  z-10 h-14 bg-gray-500 flex-row justify-between items-center px-4 hover:ml-[-10px] duration-300 hover:rounded ml-[-100px]'+ ' ' + style} >
   <a href={href}   className='flex flex-row justify-between w-full text-white items-center' download={download}
   >{child}
     
       </a></li>
</ul>
    ))}
 
   </div>
   </>
  )
}

export default Sociallinks;