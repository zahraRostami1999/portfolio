import { Link } from "react-router-dom";

const ProjectCard = (props) => {  
    const id = props.project.id;
    return (
        <>
            <div className="w-full border-b">
                <div className=" lg:w-3/5 md:w-3/5 sm:w-2/3 w-11/12 flex flex-row lg:justify-center md:justify-center sm:justify-around justify-around py-10 mx-auto">
                    <div className="w-1/2 flex justify-center">
                        <img className="lg:w-64 lg:h-60 md:w-44 md:h-40 sm:w-36 sm:h-32 w-36 h-32" src={props.project.cover} alt="project-image" />
                    </div>
                    <div className="w-1/3 py-5 font-semibold flex justify-start items-start flex-col gap-3 text-sm sm:text-sm md:text-lg">
                        <h3 className="font-bold lg:text-xl md:text-xl sm:text-base text-base">{props.project.title}</h3>
                        <h2>{props.project.date}</h2>
                        <button className="hover:bg-green-600 hover:text-yellow-300 bg-green-400 hover:font-bold rounded lg:w-1/2 md:w-2/3 sm:w-5/6 w-5/6 px-5 py-2 lg:my-5 md:my-5 sm:my-3 my-3 sm:text-sm text-xs md:text-lg lg:text-lg lg:font-semibold md:font-semibold"><Link to={`/project/${id}`}>Details</Link></button>                      
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectCard;