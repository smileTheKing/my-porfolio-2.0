/* eslint-disable react/prop-types */
import Button from "./Button";



const ProjectCard = ({ data, }) => {
    //  const[ isHover,setIsHover]= useState(false);

    return (
        <div className=' aspect-video bg-white rounded-xl border overflow-auto'>
            {data.image != null ?

                <div className="relative h-full cursor-pointer">
                    <div className="z-40 items-center flex flex-col text-center  opacity-0 hover:opacity-95 transition duration-500 ease-in-out backdrop-blur-sm overflow-hidden capitalize rounded-md absolute w-full h-full bg-black/80 p-4 gap-4">
                        <h1 className='font-bold text-2xl'>{data.title}</h1>
                        <p>{data.description}</p>
                        <div className="row flex flex-col items-center gap-4 flex-wrap justify-center">

                            <ul className="flex flex-row gap-4">
                                {data.skills.map((skill, index) => {
                                    return <li key={skill + index} className="bg-orange-500/50 px-2 rounded-md">{skill}</li>
                                })}
                            </ul>
                            <div className="w-fit"> <Button link={data.link} title={'view live'} /></div>
                        </div>
                    </div>
                    <img className=' object-cover w-full h-full rounded' src={data?.image} />
                </div>

                : <span>No image right</span>}
        

        </div>
    );
}

export default ProjectCard;