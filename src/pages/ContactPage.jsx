import Input from '../components/Input'
import Button from '../components/Button';
import { FaGithub } from 'react-icons/fa';
import { FaFacebookF, FaX,FaLinkedinIn } from 'react-icons/fa6';
import { motion } from 'framer-motion';


const ContactPage = () => {
  return (
    <motion.section 
    initial={{opacity:0}}
    whileInView={{
     
     
      opacity:1,
      transition:{
        duration:0.75
      }
    }}
    id='contact'
    className='w-full overflow-hidden h-screen flex flex-col md:flex-row items-start  md:py-12  justify-center mb-12'>
       <div className="left-section w-full justify-center text-wrap md:w-2/4 h-full gap-4 flex flex-col text-white pb-6 md:pb-0">
       <div className=" md:h-[500px] pt-4 bg-red-200/0 flex flex-col space-y-6">
       <h1 className='text-2xl text-orange-500 bg-orange-100 shadow w-fit p-2 rounded-md'>Let&apos;s Connect! 💌</h1>
       <p className='text-slate-400 md:w-[450px]'>
       If you ever want to grab a coffee/bubble tea (virtually) or just want a quick chat - you can find me on social media or you can send me a message here!
       </p>


       <div className="social-media text-xl md:text-3xl flex gap-4 ">
              <FaGithub/>
              <FaLinkedinIn/>
              <FaX/>
              <FaFacebookF/>  
        </div>
       </div>
      
      </div>
      <div className="right-section w-full md:w-3/5 justify-center  h-full gap-4 flex flex-col text-white ">
      
        <Input type='email' title='full name'/>
        <Input type='email' title='email'/>
        <textarea className='w-full h-[200px] md:min-h-[300px] border-2 border-orange-500 p-2 rounded-md text-black' placeholder='message' />
        <div className=" self-end">
        <Button title={'connect'}/>
          </div>
      </div>


     

    </motion.section>
  )
}

export default ContactPage;