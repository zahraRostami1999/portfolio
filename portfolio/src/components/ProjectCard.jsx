import banner from "../assets/banner.png";
import { Link } from "react-router-dom";
import img from '../assets/shop-cover.png';

const ProjectCard = (props) => {  
    return (
        <>
            <div className="w-full">
                <div className="w-full flex flex-row justify-center py-10">
                    <div className="w-1/2 flex justify-center">
                        <img className="lg:w-2/3 md:w-4/5 sm:w-5/6 w-full" src={img} alt="project-image" />
                    </div>
                    <div className="w-1/3 py-10 font-semibold flex justify-start items flex-col gap-3">
                        <h1>{props.project.id}</h1>
                        <h3>{props.project.title}</h3>
                        <button className="border-2 border-neutral-700 rounded w-1/2 px-5 py-1 lg:my-5 md:my-5 sm:my-3 my-3"><Link to={`/${props.project.id}`}>Details</Link></button>                      
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectCard;