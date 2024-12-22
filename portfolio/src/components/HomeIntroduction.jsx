import SocialBtn from "../components/SocialBtn";
import { Link } from "react-router-dom";

const HomeIntroduction = () => {
    return (
        <>
            <div className="w-full h-full flex flex-wrap justify-start items-center sm:py-10 py-6">
                <div className="lg:text-5xl md:text-3xl sm:text-2xl text-2xl w-full my-5">
                    <div className="w-full">Hello I'm <span className="font-extrabold">Zahra Rostami</span></div>
                </div>
                <div className="lg:text-xl md:text-lg sm:text-base text-sm py-5 md:py-0">
                    <div>
                    I'm a <span className="font-extrabold">Frontend Developer</span> with expertise in React, Redux, and Tailwind CSS, along with experience in modern libraries and frameworks. My focus is on building scalable, efficient, and visually appealing web applications that prioritize performance and usability. Explore my portfolio to see the solutions I’ve delivered.
                    </div>
                </div>
                <div className="w-full lg:text-xl md:text-base sm:text-base text-sm font-semibold lg:mx-auto mx-0 my-10 md:my-6"><Link to="/project" className="bg-yellow-400 py-3 rounded px-5">See My Projects</Link></div>
                <div className="w-full my-5 md:my-0">
                    <SocialBtn />
                </div>
            </div>
        </>
    );
}

export default HomeIntroduction;