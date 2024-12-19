import SocialBtn from "../components/SocialBtn";

const HomeIntroduction = () => {
    return (
        <>
            <div className="w-full h-full flex flex-wrap justify-start items-center">
                <div className="text-5xl">
                    <div>Hello I'm <span className="font-extrabold">Zahra Rostami</span></div>
                </div>
                <div className="font-xl">
                    <div>
                        I'm Flora Sheen Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.
                    </div>
                </div>
                <div className="w-full">
                    <SocialBtn />
                </div>
            </div>
        </>
    );
}

export default HomeIntroduction;