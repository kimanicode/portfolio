import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';


const Hero = () => {
  return (
    <div className='w-full flex flex-col  px-8 md:px-[100px] bg-zinc-200 ' id='home'>
        <div className='py-5'>
            <p className ='italic text-green-500'>Hi my name is,</p>
        </div>

        <div className='w-full '>
            <h1 className=' text-3xl text-indigo-600
            md:text-6xl'>Kimani Karaba.</h1>

        </div>

        <div className='py-5'>
            <h1 className='text-3xl text-violet-800 md:text-6xl'>I build things for the web.</h1>
        </div>

        <div  className='md:w-[400px] py-5  '>
            <p>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. I am deeply interested in Fintech.</p>
        </div>

        <div className='w-full flex flex-col'>
            <Link to='/#form'><button className='px-5 py-3  md:w-[200px]'>Hire Me </button> </Link>
        </div>


    </div>
  )
}

export default Hero