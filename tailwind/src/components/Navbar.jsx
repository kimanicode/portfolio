import React  , {useState} from 'react'
import {MenuIcon ,XIcon } from '@heroicons/react/solid'
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {

  const [nav ,setNav] = useState(false)

  function handleClick(){
    setNav(!nav)
  }
  


  return (
    
    <div className=' w-screen bg-zinc-200 h-20 sticky top-0 z-10 drop-shadow-lg' >
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'> 
                
                    <h1 className='font-bold mr-4 text-3xl sm:text-4xl text-indigo-600 italic hover:not-italic' > <Link to ='/#home'>KIMANI.</Link></h1>
                    <ul className='hidden md:flex px-20'>
                        <li> <Link to ='/#home'>Home</Link></li>
                        <li> <Link to='/#about'>About</Link></li>
                        <li> <Link to='/#contact'>Contact</Link></li>
                        
                        

                    </ul>

                   
            

            </div>
            <div className='hidden md:flex pr-4'>
                      {/* <button className=' text-black bg-transparent border-none mr-4'>Sign up</button> */}
                      <button className='px-8 py-3 '>Resume</button>
            </div>
            <div  className='md:hidden' onClick={handleClick}>
               {!nav ? <MenuIcon className='w-5'/>: <XIcon className='w-5'/>} 
           </div>

        </div>

        {nav &&   <ul className='px-8 absolute bg-zinc-200  w-full'>
                        <li> <Link to ='/#home'>Home</Link></li>
                        <li> <Link to='/#about'>About</Link></li>
                        <li> <Link to='/#contact'>Contact</Link></li>

          <div className='flex flex-col'>
           
            <button className='px-8 py-3'>Download Resume</button>

          </div>


        </ul>
        
       
        
        }

       
        
       
        
    </div>


    
  )
}

export default Navbar