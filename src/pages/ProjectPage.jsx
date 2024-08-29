import React, { useState } from 'react';
import { p1, p2 } from '../assets/assetFiles';
import ProjectCard from '../components/ProjectCard';
import { useNavigate } from 'react-router-dom';




const ProjectPage = () => {


    const navigate =  useNavigate();

    const projects = [
        {
            "id":'01',
            "image":p1,
            "title":'MovieNook',
            "description":' this is a ai website for helping people.',
            "link":'/openai',
            skills:['React','Tailwind','api']
        
        },
        {
            "id":'02',
            "image":p2,
            "title":'seveen',
            "description":' this is a ecomm website for shopping.',
            "link":'/watersidemarket.com',
            skills:['React','Tailwind','api']
        
        },
        {
            "id":'03',
            "image":p2,
            "title":'Analystic Landing Page',
            "description":' this is a construction website for helping people connect with builders in Liberia.',
            "link":'www.ibuilt.com',
            skills:['React','Tailwind','api']
        
        },
        {
            "id":"04",
            "image":p1,
            "title":'Hair Dressing Website',
            "description":' this is a ai website for helping people.',
            "link":'/openai',
            skills:['React','Tailwind','api']
        
        },
    ]

    const _handleNavigation = async (event)=>{
        console.log(event)
     navigate(`/projects/${event.id}`);
     window.scrollTo({top:0})
    }
  return (
    <section className="flex flex-col  w-full min-h-screen text-white pb-24 px-4">
        <h2 className="title text-4xl font-bold text-center h-[80px] bg-slate-900/0 flex justify-center items-center uppercase rounded-md">My Project</h2>
        <div className='mx-auto font-mono'>
            {/* isMobile */}
            <h4 className='text-orange-500 md:hidden'>Click on project to read description</h4>
            <h4 className='text-orange-500 hidden md:block '>Hover over project to read description</h4>
        </div>
        <div className="list_of_cards grid md:grid-cols-2 grid-cols-1 gap-6 w-full h-full mt-12">
            {projects.map((project)=> <ProjectCard onClick={()=>_handleNavigation(project)} key={project.id}  data={project} /> 
            )}
            
        </div>


    </section>
  )
}

export default ProjectPage;