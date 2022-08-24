import React from 'react'
import me from '../assets/me.png'

const About = () => {
  return (
    <div className='w-full bg-zinc-200 md:px-[100px] px-8' id='about'>
        <p className='text-center text-indigo-600 md:text-2xl py-4 underline'>About Me</p>
        <div className=' md:flex '>
        <div className='basis-1/2'>
            <p className=' md:py-10'>Hello! My name is Geoffrey  and I enjoy creating web applications. My interest in web development started back in 2018 when I joined campus ,i had never heard of it before and was therefore deeply intrigued — turns out curiosity  taught me a lot about HTML & CSS! <br/>
            <br/>

            Fast-forward to today, and I’ve had the privilege of attending various tech events and learning various technologies. My main focus these days is building accessible, inclusive products and digital experiences. Am also working on developing a start-up.
            <br/><br/>

           </p>
           <div>
            <p className='italic text-indigo-600 text-center py-2'>Here are a few technologies I’ve been working with recently:</p>
            <ol className='text-start'>
                
                <li className='py-2 text-start'>Tailwind Css</li>
                <li className='py-2 text-center'>Javascript (ES6+)</li>
                <li className='py-2 text-start'>ReactJS</li>
                <li className='py-2 text-center'>NodeJs</li>
                <li className='py-2 text-start'>Firebase</li>
                <li className='py-2 text-center'> Git</li>
            </ol>



           </div>

        </div>
        <div className='basis-1/2 h-full'><img src={me} alt="picha"  className='w-full'/></div>

        </div>
    </div>
  )
}

export default About