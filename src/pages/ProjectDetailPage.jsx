import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { dummyData } from '../assets/assetFiles';
import { IoClose } from 'react-icons/io5';
import { motion } from 'framer-motion';

const ProjectDetailPage = () => {
    const[data,setData]=useState(dummyData)
    const[loading,setLoading]=useState(true)
    const { projectTitle } = useParams();
    
  useEffect(()=>{
    fetchData(projectTitle)
  },[]);


  const fetchData = async (id)=>{
    const x =  await data.find((el)=>el.id == id);
    if(x){
      setData(x)
      setLoading(false)
    }
    
  }

  return (
   <>
    {loading ? <div className="h-screen w-full text-white text-2xl font-bold text-center">
      Loading....
    </div>:

<motion.section 
 initial={{opacity:0}}
 whileInView={{opacity:1, transition:{
     duration:0.75
 }}}
className='text-white w-full min-h-screen p-4 flex flex-col'>
<div className=" h-20 flex items-center self-end">
  <span className='bg-red-700 p-2  rounded-md h-fit hover:opacity-80 transition-all'><Link to={'/projects'}>Go back</Link></span>
</div>
<div className="wrapper w-full h- flex flex-col md:flex-row ">
<div className="left w-full md:w-2/4 h-fit flex">
<img src={data?.image} alt={data.title} />
</div>

 <div className="right w-full md:w-2/4 h-full md:pl-12 flex flex-col  items-start justify-start">
 <h1 className='font-bold text-2xl'>{data?.title}</h1>
 <p className='font-semiboldbold text-lg text-slate-600'>Description: {data?.description?.title}</p>
 <h3>Key Features:</h3>
 <ul>
  {data?.description?.features?.map((f,index)=><li key={index+1}>{`${index+1}.${f}`}</li>)}
 </ul>
 </div>
</div>




</motion.section>
    }
   </>
  )
}

export default ProjectDetailPage;