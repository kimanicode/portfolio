import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact = () => {
  return (
    <div className='w-full md:px-[100px] bg-zinc-200' id='contact'> 
        {/* <p className='text-center text-indigo-600 md:text-2xl py-2 underline'  >Contacts</p> */}
        <div className='text-center py-8'>
            <p className='text-5xl text-violet-800 py-5'>Get In Touch</p>
             <div className='flex justify-center'>

            
              <div className='px-4'><a href="https://www.facebook.com/kimani.karaba"><FacebookIcon color='primary'/></a></div>

              <div className='px-4'>
                <a href="https://twitter.com/kimaniGeoffre14"><TwitterIcon color='primary'/></a>
                </div>
              <div className='px-4'>
                <a href="https://www.linkedin.com/in/kimani-geoffrey-ba8039212/"><LinkedInIcon color='primary'/></a>
                </div>
              <div className='px-4'>
                <a href="https://github.com/kimanicode"><GitHubIcon color='primary'/></a>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Contact