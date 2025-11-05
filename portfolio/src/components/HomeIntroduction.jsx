import SocialBtn from "../components/SocialBtn";
import { Link } from "react-router-dom";
import { useState } from "react";

const HomeIntroduction = () => {
    const [downloading, setDownloading] = useState(false);

    const handleDownload = () => {
        setDownloading(true);

        const link = document.createElement("a");
        link.href = "/Resume.pdf"; 
        link.download = "Zahra_Rostami_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setTimeout(() => setDownloading(false), 1000);
    };
    return (
        <>
            <div className="w-full h-full flex flex-wrap justify-start items-center sm:py-10 py-6 text-neutral-700">
                <div className="lg:text-5xl md:text-3xl sm:text-2xl text-2xl w-full my-5">
                    <div className="w-full">Hello I'm <span className="font-extrabold text-neutral-800">Zahra Rostami</span></div>
                </div>
                <div className="lg:text-xl md:text-lg sm:text-base text-sm py-5 md:py-0">
                    <div>
                        I'm a <span className="font-extrabold text-neutral-800">Frontend Developer</span> who loves crafting awesome web experiences using React, Next.js, Redux, and Tailwind CSS. I’m all about creating user-friendly, visually stunning, and high-performing web apps that make a difference. Check out my portfolio to see the cool stuff I’ve been working on!
                    </div>
                </div>
                <div>
                    {/* <div className="w-full lg:text-base md:text-base sm:text-base text-sm font-semibold lg:mx-auto mx-0 my-10 md:my-6 ">
                        <Link to="/project" className="bg-red-300 text-neutral-800 hover:bg-red-400 hover:text-neutral-900 py-3 rounded-xl px-5 drop-shadow-lg">
                            What I've Created
                        </Link>
                    </div> */}
                    <div className="w-full lg:text-base md:text-base sm:text-base text-sm font-semibold lg:mx-auto mx-0 my-10 md:my-6 ">
                        <button
                            onClick={handleDownload}
                            disabled={downloading}
                            className={`bg-red-300 hover:bg-red-400 text-neutral-800 hover:text-neutral-900  py-3 rounded-xl px-5 drop-shadow-lg transition-all ${downloading ? "opacity-70 cursor-not-allowed" : ""
                                }`}
                        >
                            {downloading ? "Downloading..." : "Download Resume"}
                        </button>
                    </div>
                </div>
                {/* <div className="w-full my-5 md:my-0 mx-1">
                    <SocialBtn />
                </div> */}
            </div>
        </>
    );
}

export default HomeIntroduction;