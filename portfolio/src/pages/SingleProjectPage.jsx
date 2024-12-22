import { Projects } from "../data/projects";
import { useParams } from 'react-router-dom';
import img from '../assets/shop-img.png';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


const SingleProjectPage = () => {
    const { id } = useParams();
    const ProjectInfo = Projects.find(project => project.id == id);

    return (
        <>
            <div className="w-full min-h-screen  flex justify-center items-center flex-row py-20">
                <div className="w-1/2 flex justify-around flex-row items">
                    <div className="w-3/5 border-2 border-black py-2 text-center px-10 rounded">
                        <h1 className="font-bold text-3xl mb-3">{ProjectInfo.title}</h1>
                        <p className="text-xl">{ProjectInfo.description}</p>
                        <img className="my-5" src={img} alt="" />
                    </div>
                    <div className="w-1/3 flex flex-col justify-between">
                        <div className="flex flex-wrap w-full justify-around items-center border-2 border-black rounded h-2/5 py-3">
                            <button className="border-2 w-2/3 py-2 border-gray-700 font-bold"><Link to="https://github.com/zahraRostami1999/shop-app">GitHub</Link></button>
                            <button className="border-2 w-2/3 py-2 border-gray-700 font-bold"><Link to="https://shop.zahra-rostami.ir/">Demo</Link></button>
                        </div>
                        <div className="border-2 border-black h-1/2 w-full flex justify-center items-center rounded text-xl font-semibold">
                            <ul>
                                {ProjectInfo.technologies.map(tech => (
                                    <li className="my-5" key={tech}>{tech}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="fixed left-5 bottom-5 bg-pink-400 rounded-full px-4 py-3">
                    <Link to="/"><FontAwesomeIcon icon={faArrowLeft} /></Link>
                    
                </div>
            </div>
        </>
    );
}

export default SingleProjectPage;