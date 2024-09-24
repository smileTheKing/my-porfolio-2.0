
import Hero from '../components/Hero';
import AboutPage from './AboutPage';
import ProjectPage from './ProjectPage';
import ContactPage from './ContactPage';
//import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <main className="p-4 relative justify-around container mx-auto flex flex-col min-h-screen space-y-4">     
        <Hero/>
        <ProjectPage/>
        <AboutPage/>
        <ContactPage/>

        <div className="button bg-orange-500 font-bold text-xl z-[1000] flex justify-center items-center p-4 absolute rounded-full right-0 bottom-[50px] shadow  h-[50px] w-[50px]">
        <a href="/#">Top</a>
        </div>

    </main>
  )
}

export default HomePage;