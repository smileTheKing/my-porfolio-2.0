import {FaGithub } from 'react-icons/fa';
import { FaFacebookF, FaX,FaLinkedinIn } from 'react-icons/fa6';
import { me} from '../assets/assetFiles';
import Button from './Button';
import { IoIosArrowDown } from 'react-icons/io';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section
    
    initial={{opacity:0}}
    whileInView={{opacity:1, transition:{
        duration:1
    }}}
    className=" w-full md:h-screen min-h-full flex flex-col justify-around gap-8 md:gap-0  text-white bg-red-200x">
      <div className="flex flex-col md:flex-row items-center gap-6">
      <div className="left-side w-full md:w-2/3 h-full flex flex-col justify-center gap-y-8 ">
          <h4 className='uppercase'>Hi there!</h4>
            <h1 className="text-3xl md:text-6xl font-semibold ">
            I&rsquo;m Solomon
            </h1>
            <p className="font-thin text-[1.5rem] md:text-2xl text-wrap text-gray-300 ">
                A <span className='text-orange-500'>front-end web Developer</span> passionate about creating interactive applications and experiences on the web.
            </p>


            <div className="flex flex-col md:flex-row  md:items-center justify-between md:w-[400px] gap-4 md:gap-0">
              <div className=" w-fit">
              <Button title={'Resume'}/>
              </div>
              <div className="social-media text-xl md:text-3xl flex gap-6 ">
              <FaGithub/>
              <FaLinkedinIn/>
              <FaX/>
              <FaFacebookF/>  
            </div>
            </div>   
      </div>

        {/* this is the image section */}
        <div className="right-side flex  md:grid place-content-center place-items-start md:w-[80%] max-w-[280px] w-full h-fit  bg-green-600/0">
            <img width={'100%'} height={'100%'} className="  object-cover" src={me} alt="my picture" />
        </div>
      </div>

        <a href='#project' className="text-orange-500 text-3xl flex self-center animate-bounce ">
          <IoIosArrowDown/>
        </a> 

       
    </motion.section>
  )
}

export default Hero;