import { Projects } from "../data/projects";
import { useParams } from 'react-router-dom';
import img from '../assets/shop-img.png';
import {Link} from "react-router-dom"


const SingleProjectPage = () => {
    const { id } = useParams();
    const ProjectInfo = Projects.find(project => project.id == id);

    return (
        <>
            <div className="w-full  flex justify-center flex-row py-20">
                <div className="w-1/2 flex justify-around flex-row py-10 ">
                    <div className="w-3/5 border-2 border-black py-5 text-center px-10 rounded">
                        <h1 className="font-bold text-3xl my-3">{ProjectInfo.title}</h1>
                        <p>{ProjectInfo.description}</p>
                        <img src={img} alt="" />
                    </div>
                    <div className="w-1/3 border flex items flex-wrap">
                        <div className="flex flex-wrap w-full justify-around items-center border-2 border-black rounded h-1/3 mb-10">
                            <button className="border-2 w-2/3  border-gray-700"><Link to="https://github.com/zahraRostami1999/shop-app">GitHub</Link></button>
                            <button className="border-2 w-2/3  border-gray-700"><Link to="https://shop.zahra-rostami.ir/">Demo</Link></button>
                        </div>
                        <div className="border-2 border-black h-1/2 w-full flex justify-center items-center rounded">
                            <ul>
                                {ProjectInfo.technologies.map(tech => (
                                    <li key={tech}>{tech}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleProjectPage;