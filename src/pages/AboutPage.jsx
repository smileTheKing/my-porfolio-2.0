import React from 'react'
import { myPicture,me } from '../assets/assetFiles'
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
      className=" w-full md:min-h-screen h-fit overflow-hidden p-4 flex flex-col md:flex-row  text-white">

      <div className="left-side md:w-3/5 h-full flex flex-col justify-center gap-y-5 ">
        <h1 className='font-semibold uppercase text-3xl'>
          about me
        </h1>
        <p className='text-wrap'>
        Front-end web developer with a passion for crafting interactive applications and experiences for web and mobile platforms. I thrive on turning designs into engaging, user-friendly interfaces that seamlessly blend form and function. My expertise lies in creating responsive, accessible, and performant web applications that delight users across devices.
        </p>


        <div className="space-y-4 flex flex-col items-start">
          <h3 className=" font-semibold">Tools/Skillset</h3>
          <ul className="flex flex-col gap-1 list-disc w-full px-8">
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


      <div className='w-full md:w-2/4 flex flex-col items-center justify-start'>
        <img className=" w-[250px]  object-cover" src={me} alt="my picture" />
        {/* <div className="flex flex-col self-start">
          <h2 className='font-bold'>Solomon Cammue</h2>
          <h2>s.ammue@gmail.com</h2>
          <h2>Solomon Cammue</h2>


         
        </div> */}

      </div>

    </motion.section>
  )
}

export default AboutPage;