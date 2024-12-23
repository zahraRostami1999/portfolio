import { Link } from "react-router-dom";

const ProjectCard = (props) => {  
    const id = props.project.id;
    return (
        <>
            <div className="w-full border-b">
                <div className="w-full flex flex-row justify-center py-10">
                    <div className="lg:w-1/2 w-5/6  flex justify-center md:w-2/3 sm:w-4/5">
                        <img className="lg:w-2/5 md:w-4/5 sm:w-5/6 w-full " src={props.project.cover} alt="project-image" />
                    </div>
                    <div className="w-1/3 py-10 font-semibold flex justify-start items flex-col gap-3 text-sm sm:text-sm md:text-lg">
                        <h1>{props.project.id}</h1>
                        <h3>{props.project.title}</h3>
                        <h2>{props.project.date}</h2>
                        <button className="hover:border-2 border-2 border-red-300 hover:border-neutral-700 hover:font-bold rounded lg:w-1/2 md:w-1/2 sm:w-5/6 w-full px-5 py-2 lg:my-5 md:my-5 sm:my-3 my-3 bg-red-300 text-neutral-800 sm:text-sm text-xs md:text-base"><Link to={`/project/${id}`}>Details</Link></button>                      
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectCard;