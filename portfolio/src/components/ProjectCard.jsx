import { Link } from "react-router-dom";
import { useState } from "react";

const ProjectCard = (props) => {
    const name = props.project.name;
    const [imageLoaded, setImageLoaded] = useState(false);
    return (
        <>
            <div className="w-full border-b">
                <div className=" lg:w-3/5 md:w-3/5 sm:w-2/3 w-11/12 flex flex-row lg:justify-center md:justify-center sm:justify-around justify-around py-10 mx-auto">
                    <div className="w-1/2 flex justify-center">
                        {!imageLoaded && (
                            <div className={`lg:w-44 lg:h-40 md:w-40 md:h-36 sm:w-28 sm:h-24 w-24 h-20 rounded animate-pulse`} />
                        )}
                        <img className="lg:w-44 lg:h-40 md:w-40 md:h-36 sm:w-28 sm:h-24 w-24 h-20"
                            src={props.project.cover}
                            alt="project image"
                            onLoad={() => setImageLoaded(true)}
                            style={{ display: imageLoaded ? "block" : "none" }}
                        />
                    </div>
                    <div className="w-1/3 font-semibold flex justify-start items-start flex-col gap-3 text-sm sm:text-sm md:text-lg">
                        <h3 className="font-bold lg:text-xl md:text-xl sm:text-base text-sm text-neutral-800">{props.project.title}</h3>
                        <h2 className="lg:text-sm md:text-sm sm:text-xs text-xs text-neutral-600">{props.project.date}</h2>
                        <div className="w-full">
                            <Link to={`/project/${name}`}>
                                <p className="hover:bg-red-300 text-center text-neutral-800 bg-red-200 hover:font-bold rounded lg:w-1/2 md:w-2/3 sm:w-5/6 w-5/6 px-5 py-2 lg:my-5 md:my-5 sm:my-3 my-3 sm:text-xs text-xs md:text-sm lg:text-sm lg:font-semibold md:font-semibold">
                                    Details
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectCard;