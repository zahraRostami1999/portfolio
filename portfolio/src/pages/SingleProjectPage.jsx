import { Projects } from "../data/projects";
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faArrowLeft } from '@fortawesome/free-solid-svg-icons';


const SingleProjectPage = () => {
    const { id } = useParams();
    const ProjectInfo = Projects.find(project => project.id == id);    

    return (
        <>
            <div className="w-full min-h-screen flex justify-center items-center flex-row text-neutral-800 ">
                <div className="lg:w-1/2 md:w-5/6 flex justify-around lg:flex-row md:flex-row sm:flex-wrap flex-wrap">
                    <div className="relative lg:w-2/3 sm:w-5/6 w-5/6 md:w-2/3 sm:5/6 border-2 border-black text-center lg:py-5 py-3 sm:py-5 lg:px-10 px-1 rounded my-5 md:my-0 lg:my-0">
                        <h1 className="font-bold lg:text-3xl md:text-2xl sm:text-xl text-lg  mb-3">{ProjectInfo.title}</h1>
                        <p className="lg:text-base md:text-base sm:text-sm text-xs">
                            <ul className="flex justify-center flex-wrap my-6">
                                {ProjectInfo.technologies.map(tech => (
                                    <li className="mx-3" key={tech}>{tech}</li>
                                ))}
                            </ul></p>
                        <img className="my-5 rounded" src={ProjectInfo.img} alt="" />
                        <div className="absolute top-2 right-3 rounded-full lg:text-lg md:text-base sm:text-sm text-sm">
                            <Link to="https://zahra-rostami.ir/project"><FontAwesomeIcon icon={faXmark} /></Link>
                        </div>
                    </div>
                    <div className="lg:w-1/4 md:w-1/4 sm:w-5/6 w-5/6 flex lg:flex-col md:flex-col sm:flex-row flex-row justify-between lg:text-xl md:text-base sm:text-sm text-sm">
                        <div className="flex flex-wrap lg:w-full md:w-full w-1/2 justify-around items-center border-2 border-black rounded lg:h-2/5 md:h-2/5 py-3 mr-2 md:mr-0 lg:mr-0">
                            <button className=" lg:w-2/3 md:w-2/3 w-11/12 lg:py-2 py-1 font-bold mb-2 md:mb-0 lg:mb-0 rounded bg-black text-white hover:bg-neutral-800 hover:text-yellow-300"><Link to={ProjectInfo.githubLink}>GitHub</Link></button>
                            <button className={` lg:w-2/3 md:w-2/3 w-11/12 lg:py-2 py-1  bg-green-400 font-bold rounded hover:bg-green-600 hover:text-yellow-300 text-white ${ProjectInfo.figmaLink==="" ? "opacity-30 cursor-none" : "opacity-100"} `}><Link to={ProjectInfo.figmaLink}>Figma</Link></button>
                        </div>
                        <div className="border-2 border-black lg:h-1/2 md:h-1/2 lg:w-full md:w-full w-1/2 flex justify-center items-center  rounded font-semibold">
                            <button className="lg:w-2/3 md:w-2/3 w-11/12 lg:py-2 py-1 bg-yellow-400 hover:bg-orange-400 hover:text-white font-bold rounded"><Link to={ProjectInfo.demoLink}>Preview</Link></button>
                        </div>
                    </div>
                    <div className="border-2 border-black lg:w-full rounded mx-4 my-5 px-5 py-10 sm:w-5/6 w-5/6 lg:text-base md:text-base sm:text-sm text-xs">
                        {ProjectInfo.description}
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleProjectPage;