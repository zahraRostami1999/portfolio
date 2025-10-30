import ProjectCard from "../components/ProjectCard";
import { Projects } from "../data/Projects.jsx";
import { useState, useMemo, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const ProjectsPage = () => {
    const [projectInfo, setProjectInfo] = useState([]);
    const filterBtn = ["All Projects", "React", "Tailwind CSS","TypeScript" , "React Query", "Redux", "Responsive"];
    const [filter, setFilter] = useState("All Projects");
    const [burgerFilter, setBurgerFilter] = useState(false);

    useEffect(() => {
        setProjectInfo(Projects);
    }, []);

    const handleFilterProducts = (newFilter) => {
        setFilter(filter => newFilter);
    };

    const filteredProducts = useMemo(() => {
        if (filter === "All Projects") return projectInfo;
        return projectInfo.filter(product => product.technologies.includes(filter));
    }, [projectInfo, filter]);

    const handleBurgerFilter = () => {
        setBurgerFilter(burgerFilter => !burgerFilter);
    }

    return (
        <>
            <div className="w-full flex justify-center py-10 text-neutral-700">
                <div className="w-11/12 flex justify-center flex-wrap ">
                    <div className="w-full text-center mb-5 lg:text-4xl md:text-2xl sm:text-xl text-base font-bold">My Projects</div>
                    <div className="sm:hidden hidden w-full lg:flex md:flex flex-row border-b justify-start text-xs lg:text-lg md:text-base font-Poppins font-medium">
                        {filterBtn.map((btn) => {
                            return <button className="px-2 lg:px-5 md:px-3 py-2 border-b hover:text-neutral-600 hover:border-b hover:border-neutral-700 transition-all duration-900 ease-in-out" key={btn} onClick={() => handleFilterProducts(btn)}>{btn}</button>
                        })}
                    </div>
                    <div className="sm:flex flex lg:hidden md:hidden justify-start w-full text-xl">
                        <FontAwesomeIcon icon={faBars} onClick={handleBurgerFilter} />
                    </div>
                    <div className={`${burgerFilter ? "block" : "hidden"} w-full justify-start flex-wrap`}>
                        <div className="w-1/4  border-l mt-3 text-xs absolute top-24 bg-transparentBlack rounded text-white">
                            {filterBtn.map((btn) => {
                                return <button className="px-2 lg:px-5 md:px-3 py-2 w-full hover:text-red-300 hover:border-l-2 hover:border-red-300 transition-all duration-300" key={btn} onClick={() => handleFilterProducts(btn)}>{btn}</button>
                            })}
                        </div>
                    </div>
                    <div className="w-full">
                        {filteredProducts.map(project =>
                            <ProjectCard key={project.id} project={project} />
                        )}
                    </div>
                </div>

            </div>
        </>
    );
}

export default ProjectsPage;