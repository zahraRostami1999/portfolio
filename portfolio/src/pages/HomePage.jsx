import banner from "../assets/girl banner.png";
import HomeIntroduction from "../components/HomeIntroduction";

const HomePage = () => {
    return (
        <>
            <div className="w-full my-10 min-h-screen">
                <div className="container">
                    <div className="flex w-full justify-between">
                        <div className="w-1/2">
                            <HomeIntroduction />
                        </div>
                        <div className="w-1/2">
                            <img className="w-2/3 mx-auto" src={banner} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;