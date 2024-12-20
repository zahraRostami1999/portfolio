import ProjectCard from "../components/ProjectCard";
const ProjectsPage = () => {
    return (
        <>
            <div className="w-full min-h-screen">
                <div className="my-10 px-10">
                    <div className="text-5xl text-center my-5">
                        <h1>My Projects</h1>
                    </div>
                    <div className="bg-black text-white">
                        <div>
                            <ProjectCard />
                            <ProjectCard />
                            <ProjectCard />
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectsPage;