import ProjectCard from "../components/ProjectCard";
import { Projects } from "../data/projects";
import { useState, useMemo,useEffect } from "react";
const ProjectsPage = () => {
    const [projectInfo, setProjectInfo] = useState([]);
    const filterBtn = ["All Projects", "React", "Tailwind CSS", "Redux", "Responsive"];
    const [filter, setFilter] = useState("All Projects");

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
    
    return (
        <>
            <div className="w-full flex justify-center py-10 text-neutral-800">
                <div className="w-11/12 flex justify-center flex-wrap ">
                    <div className="w-full text-center mb-5 lg:text-4xl md:text-2xl sm:text-xl text-base font-bold">My Projects</div>
                    <div className="w-full flex flex-row border-b justify-start text-xs lg:text-lg md:text-base font-Poppins font-medium">
                        {filterBtn.map((btn) => {
                            return <button className="px-2 lg:px-5 md:px-3 py-2  hover:text-neutral-600 hover:border-b hover:border-neutral-900 transition-all duration-300" key={btn} onClick={() => handleFilterProducts(btn)}>{btn}</button>
                        })}
                    </div>
                    <div className="">
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