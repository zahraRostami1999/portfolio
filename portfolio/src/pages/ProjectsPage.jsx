import ProjectCard from "../components/ProjectCard";
import { Projects } from "../data/projects";
import { useState } from "react";
const ProjectsPage = () => {
    const [projectInfo, setProjectInfo] = useState([]);
    const filterBtn = ["All", "React", "Tailwind CSS", "Redux"];
    const [filter, setFilter] = useState("All");

    // const handleFilterProducts = (newFilter) => {
    //     setFilter(newFilter);
    // };

    // const filteredProducts = useMemo(() => {
    //     if (filter === "all") return projectInfo;
    //     return projectInfo.filter((project) => project.technologies === filter);
    // }, [projectInfo, filter]);

    return (
        <>
            <div className="w-full flex justify-center lg:py-14 md:py-14 sm:py-10 py-10">
                <div className="w-11/12 flex justify-center flex-wrap ">
                    <div className="w-full text-center mb-5 text-4xl font-bold">My Projects</div>
                    <div className="w-full flex flex-row border-b justify-start text-xs lg:text-base md:text-base font-Poppins font-medium">
                        {filterBtn.map((btn) => {
                            return <button className="px-2 lg:px-5 md:px-3 py-2  hover:text-neutral-600 hover:border-b hover:border-neutral-900 transition-all duration-300" key={btn} onClick={() => handleFilterProducts(btn)}>{btn}</button>
                        })}
                    </div>
                    <div className="">
                        {Projects.map(project =>
                            <ProjectCard key={project.id} project={project} />
                        )}
                    </div>
                </div>

            </div>
        </>
    );
}

export default ProjectsPage;