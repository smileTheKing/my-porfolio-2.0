import { p1,analytic,saloon,dashboard} from '../assets/assetFiles';
import ProjectCard from '../components/ProjectCard';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';





const ProjectPage = () => {
    const navigate =  useNavigate();
    const projects= [
        {
            "id":'01',
            "image":p1,
            "title":'MovieNook',
            "description":'This is a website for searching up movies. It uses the movie database api to fetch data.',
            "link":'https://movie-app-api-sigma.vercel.app/',
            skills:['React','Tailwind','api']
        
        },
        {
            "id":'02',
            "image":dashboard,
            "title":'Dashboard',
            "description":'This is a dashboard for a website that helps people analyze their data.',
            "link":'https://shpt-admin.vercel.app/',
            skills:['React','Tailwind','api']
        
        },
        {
            "id":'03',
            "image":analytic,
            "title":'Analystic Landing Page',
            "description":'This is a responsive ui landing page for a website that helps people analyze their data.',
            "link":'https://landing-page-analytics.vercel.app/',
            skills:['React','Tailwind css','html','css']
        
        },
        {
            "id":"04",
            "image":saloon,
            "title":'Hair Dressing Website',
            "description":'This is a hair dressing website for helping customers book appointments with hair dressers.',
            "link":'https://saloon-landing-page.vercel.app/',
            skills:['React','Tailwind','api','firebase']
        
        },
    ]

    const _handleNavigation = async (event)=>{
        console.log(event)
     navigate(`/projects/${event.id}`);
     window.scrollTo({top:0})
    }
  return (
    <motion.section
    id='project'
    initial={{opacity:0}}
    whileInView={{opacity:1, transition:{
        duration:1
    }}}
    animate={{
      // opacity:1
    }}  className="flex flex-col gap-8 w-full min-h-svh  text-white  py-8">
        <h2 className="text-4xl font-bold text-center bg-slate-900/0 flex justify-center items-center uppercase rounded-md">My Projects</h2>
        <div className='mx-auto font-mono'>
            {/* isMobile */}
            <h4 className='text-orange-500 md:hidden text-center'>Click on project to read description</h4>
            <h4 className='text-orange-500 hidden md:block'>Hover over project to read description</h4>
        </div>
        <div className="list_of_cards grid md:grid-cols-2 grid-cols-1 gap-6    md:mt-12">
            {projects.map((project)=> <ProjectCard onClick={()=>_handleNavigation(project)} key={project.id}  data={project} /> 
            )}
            
        </div>


    </motion.section>
  )
}

export default ProjectPage;