import SkillCard from "../components/SkillCard";
const SkillsPage = () => {
    return (
        <>
            <div className="w-full min-h-screen my-10">
                <div className="container">
                    <div className="text-5xl text-center my-5">
                        <h1>My Skills</h1>
                    </div>
                    <div className="w-full my-20">
                        <div className="grid grid-cols-4 gap-32 w-11/12 mx-auto">
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