import React from 'react'
import {FaGithub } from 'react-icons/fa';
import { FaFacebookF, FaX,FaLinkedinIn } from 'react-icons/fa6';
import { myPicture } from '../assets/assetFiles';
import Button from './Button';
import { IoIosArrowDown } from 'react-icons/io';

const Hero = () => {
  return (
    <section className=" w-full md:h-dvh h-full p-4 flex flex-col  text-white">
      <div className="flex flex-col md:flex-row  items-center">
      <div className="left-side w-full md:w-2/5 h-full flex flex-col justify-center gap-y-3 md:gap-y-8 ">
          <h4 className='uppercase'>
            Hi there! i'm
          </h4>
            <h1 className="text-3xl md:text-6xl font-semibold ">
               Solomon Cammue
            </h1>
            <p className="font-thin text-lg md:text-2xl text-wrap text-gray-300 ">
                A <span className='text-orange-500'>front-end web Developer</span> passionate about creating interactive applications and experiences on the web.
            </p>


            <div className="flex flex-col md:flex-row  md:items-center justify-between md:w-[400px] gap-4 md:gap-0">
              <Button title={'Resume'}/>

              <div className="social-media text-xl md:text-3xl flex gap-4 ">
              <FaGithub/>
              <FaLinkedinIn/>
              <FaX/>
              <FaFacebookF/>  
            </div>
            </div>

           
           
            
        </div>
        <div className="right-side flex  md:grid place-content-center place-items-start md:w-3/5 w-full h-fit  bg-green-600/0">
            <img className=" w-[180px] md:w-[350px] h-full  object-cover" src={myPicture} alt="my picture" />
        </div>

      </div>
        

        <div className="text-orange-500 text-3xl flex self-center animate-bounce">
          <IoIosArrowDown/>
        </div>
    </section>
  )
}

export default Hero;