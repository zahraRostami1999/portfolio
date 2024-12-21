import banner from "../assets/banner.png";

const ProjectCard = () => {
    return (
        <>
            <div>
                <div className="w-full flex container flex-row justify-between items-center py-10">
                    <div className="w-1/2">
                        <img className="w-52" src={banner} alt="project-image" />
                    </div>
                    <div className="w-1/2">
                        <h1>01</h1>
                        <h3>Crypto Screener Application</h3>
                        <p>I'm Flora Sheen Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectCard;