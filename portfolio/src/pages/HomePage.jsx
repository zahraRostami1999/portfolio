import banner from "../assets/banner.png";
import { useState } from "react";
import HomeIntroduction from "../components/HomeIntroduction";

const HomePage = () => {
    const [imgLoaded, setImgLoaded] = useState(false);
    return (
        <>
            <div className="w-full lg:py-0 sm:py-10 py-3  min-h-screen flex flex-wrap items-center">
                <div className="lg:px-8">
                    <div className="w-full flex lg:justify-between sm:flex-wrap-reverse justify-center flex-wrap-reverse">
                        <div className="lg:w-3/5 md:w-3/5 sm:w-4/5 w-11/12 lg:px-20 md:px-14">
                            <HomeIntroduction />
                        </div>
                        <div className="lg:w-2/5 md:w-2/5 sm:w-4/5 w-4/5 flex justify-center items-center md:items-start md:py-20">
                            {!imgLoaded && (
                                <div className={`w-2/3 rounded animate-pulse`} />
                            )}
                            <img className="w-2/3 mx-auto"
                                src={banner}
                                alt="Zahra Rostami"
                                onLoad={() => setImgLoaded(true)}
                                style={{ display: imgLoaded ? "block" : "none" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;