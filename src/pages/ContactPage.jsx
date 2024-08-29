import React from 'react';
import Input from '../components/Input'
import Button from '../components/Button';
import { FaGithub } from 'react-icons/fa';
import { FaFacebookF, FaX,FaLinkedinIn } from 'react-icons/fa6';

const ContactPage = () => {
  return (
    <section className='w-full h-screen flex flex-col md:flex-row items-start p-4  md:py-12'>
       <div className="left-section w-full text-wrap md:w-2/4 h-full  gap-4 flex flex-col text-white">
       <h1 className='text-2xl text-orange-500 bg-orange-100 shadow w-fit p-2 rounded-md'>Let's Connect! 💌</h1>
       <p className='text-slate-400 md:w-[350px]'>
       If you ever want to grab a coffee/bubble tea (virtually) or just want a quick chat - you can find me on social media or you can send me a message here!
       </p>


       <div className="social-media text-xl md:text-3xl flex gap-4 ">
              <FaGithub/>
              <FaLinkedinIn/>
              <FaX/>
              <FaFacebookF/>  
            </div>
      </div>
      <div className="right-section w-full md:w-3/4  h-full gap-4 flex flex-col text-white ">
      
        <Input type='email' title='full name'/>
        <Input type='email' title='email'/>
        <textarea className='w-full h-[200px] border-2 border-orange-500 p-2 rounded-md text-black' placeholder='message' />
        <Button title={'connect'}/>
      </div>


     

    </section>
  )
}

export default ContactPage;