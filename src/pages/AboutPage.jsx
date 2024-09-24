// import React from 'react'
import { me } from '../assets/assetFiles'
import { motion } from 'framer-motion'

const AboutPage = () => {
  return (
    <motion.section 
    initial={{opacity:0}}
    whileInView={{
     
     
      opacity:1,
      transition:{
        duration:0.75
      } }}
      id='about'
      className=" w-full  flex flex-col md:flex-row justify-between  text-white bg-red-200d py-16">

      <div className="left-side md:w-[50%] h-full flex flex-col justify-center gap-y-5 ">
        <h1 className='font-semibold uppercase text-3xl'>
          about me
        </h1>
        <p className='text-wrap text-xl font-thin'>
        Front-end web developer with a passion for crafting interactive applications and experiences for web and mobile platforms. I thrive on turning designs into engaging, user-friendly interfaces that seamlessly blend form and function. My expertise lies in creating responsive, accessible, and performant web applications that delight users across devices.
        </p>


        <div className="space-y-4 flex flex-col items-start">
          <h3 className=" font-semibold">Tools/Skillset</h3>
          <ul className="flex flex-col gap-1 list-disc w-full px-4">
            <li>Figma</li>
            <li>HTML</li>
            <li>CSS3</li>
            <li className="bg-orange-500/90 p-2 rounded">JavaScript</li>
            <li>NodeJs</li>
            <li>Python</li>
            <li>Git</li>
            <li>React</li>
            <li>Flutter</li>
            <li>Postman</li>
          </ul>
        </div>
      </div>


      <div className='max-w-[330px] w-[60%] flex flex-col items-center m-auto'>
        <img width={'100%'} height={'100%'} className=" object-cover" src={me} alt="my picture" />
      </div>

    </motion.section>
  )
}

export default AboutPage;