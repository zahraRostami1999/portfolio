import { Projects } from "../data/Projects";
import { Link, useParams } from 'react-router-dom';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const SingleProjectPage = () => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const { name } = useParams();
    const ProjectInfo = Projects.find(project => project.name === name);

    return (
        <div className="w-full min-h-screen flex justify-center items-center text-neutral-800 lg:py-20 md:py-10 sm:py-5 py-5">
            <div className="lg:w-1/2 md:w-5/6 flex justify-around lg:flex-row md:flex-row sm:flex-wrap flex-wrap">
                <div className="relative lg:w-2/3 sm:w-5/6 w-5/6 md:w-2/3 border-2 border-neutral-600 text-center lg:py-5 py-3 sm:py-5 lg:px-10 px-1 rounded my-5 md:my-0 lg:my-0">
                    <h1 className="font-bold lg:text-3xl md:text-2xl sm:text-xl text-lg mb-3">{ProjectInfo.title}</h1>
                    <ul className="flex justify-center flex-wrap my-6 lg:text-base md:text-base sm:text-sm text-xs">
                        {ProjectInfo.technologies.map(tech => (
                            <li className="mx-3" key={tech}>{tech}</li>
                        ))}
                    </ul>
                    <div className="my-5 rounded image-container">
                        {!imageLoaded && (
                            <div className={`lg:w-[600px] w-[370px] lg:h-[110px] md:h-[185px] sm:[210px] h-[115px] rounded animate-pulse`} />
                        )}
                        <img
                            className="w-full h-full object-cover rounded"
                            src={ProjectInfo.img}
                            alt={ProjectInfo.title}
                            onLoad={() => setImageLoaded(true)}
                            width="600"
                            height="220"
                            style={{ display: imageLoaded ? "block" : "none" }}
                        />
                    </div>
                    <div className="absolute top-2 right-3 rounded-full lg:text-lg md:text-base sm:text-sm text-sm text-neutral-700 hover:text-red-500 transition-all duration-300">
                        <Link to="/project"><FontAwesomeIcon icon={faXmark} /></Link>
                    </div>
                </div>
                <div className="lg:w-1/4 md:w-1/4 sm:w-5/6 w-5/6 flex lg:flex-col md:flex-col sm:flex-row flex-row justify-between lg:text-xl md:text-base sm:text-sm text-sm">
                    <div className="flex flex-wrap lg:w-full md:w-full w-1/2 justify-around items-center border-2 border-neutral-600 rounded lg:h-2/5 md:h-2/5 py-3 mr-2 md:mr-0 lg:mr-0">
                        <Link
                            to={ProjectInfo.githubLink}
                            className="lg:w-2/3 md:w-2/3 w-11/12 lg:py-2 py-1 font-bold mb-2 md:mb-0 lg:mb-0 rounded bg-black text-white hover:bg-neutral-800 hover:text-yellow-300 text-center transition-all duration-300"
                        >
                            GitHub
                        </Link>
                        <Link
                            to={ProjectInfo.figmaLink}
                            className={`lg:w-2/3 md:w-2/3 w-11/12 lg:py-2 py-1 bg-green-400 font-bold rounded hover:bg-green-600 hover:text-yellow-300 text-white text-center ${ProjectInfo.figmaLink === "" ? "opacity-30 pointer-events-none" : "opacity-100"}`}
                        >
                            Figma
                        </Link>
                    </div>
                    <div className="border-2 border-neutral-600 lg:h-1/2 md:h-1/2 lg:w-full md:w-full w-1/2 flex justify-center items-center rounded font-semibold">
                        <Link
                            to={ProjectInfo.demoLink}
                            className="lg:w-2/3 md:w-2/3 w-11/12 lg:py-2 py-1 bg-yellow-400 hover:bg-orange-400 hover:text-white font-bold rounded text-center transition-all duration-300"
                        >
                            Preview
                        </Link>
                    </div>
                </div>
                <div className="border-2 border-neutral-600 lg:w-full rounded mx-4 my-5 px-5 py-10 sm:w-5/6 w-5/6 lg:text-base md:text-base sm:text-sm text-xs">
                    {ProjectInfo.description}
                </div>
            </div>
        </div>
    );
};

export default SingleProjectPage;