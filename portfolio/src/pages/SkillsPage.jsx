import SkillCard from "../components/SkillCard";
const SkillsPage = () => {
    return (
        <>
            <div className="w-full min-h-screen my-10">
                <div className="px-10">
                    <div className="text-5xl text-center my-5">
                        <h1>My Skills</h1>
                    </div>
                    <div className="w-full md:my-20 sm:my-10 flex justify-center">
                        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
                            <SkillCard />
                            <SkillCard />
                            <SkillCard />
                            <SkillCard />
                            <SkillCard />
                            <SkillCard />
                            <SkillCard />
                            <SkillCard />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SkillsPage;